import { createClient, Client, InValue } from "@libsql/client";
import bcrypt from "bcryptjs";

let db: Client;

export type Row = Record<string, any>;

export function getDb(): Client {
  if (!db) {
    const url = process.env.TURSO_DATABASE_URL || "file:data.db";
    const authToken = process.env.TURSO_AUTH_TOKEN;

    db = createClient({
      url,
      authToken,
    });

    // Only run schema for local file DBs, not on every serverless invocation
    if (url.startsWith("file:")) {
      initSchemaSync();
    }
  }
  return db;
}

// Wrappers to mimic better-sqlite3 style
export async function all(sql: string, ...params: InValue[]): Promise<Row[]> {
  const result = await getDb().execute({ sql, args: params });
  return result.rows.map((row) => row as unknown as Row);
}

export async function get(
  sql: string,
  ...params: InValue[]
): Promise<Row | null> {
  const rows = await all(sql, ...params);
  return rows[0] || null;
}

export async function run(sql: string, ...params: InValue[]) {
  const result = await getDb().execute({ sql, args: params });
  return { lastInsertRowid: Number(result.lastInsertRowid), changes: result.rowsAffected };
}

async function initSchema() {
  const tables = [
    "users",
    "posts",
    "events",
    "books",
    "courses",
    "videos",
    "gallery",
    "settings",
  ];
  for (const table of tables) {
    const exists = await get(
      "SELECT name FROM sqlite_master WHERE type='table' AND name=?",
      table
    );
    if (exists) return; // already seeded
  }

  await run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);
  await run(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      content TEXT NOT NULL DEFAULT '',
      excerpt TEXT DEFAULT '',
      image TEXT DEFAULT '',
      author_id INTEGER REFERENCES users(id),
      published INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )
  `);
  await run(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      date TEXT NOT NULL,
      location TEXT DEFAULT '',
      description TEXT DEFAULT '',
      image TEXT DEFAULT '',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )
  `);
  await run(`
    CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      author TEXT DEFAULT '',
      description TEXT DEFAULT '',
      cover_image TEXT DEFAULT '',
      file_url TEXT DEFAULT '',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )
  `);
  await run(`
    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT DEFAULT '',
      instructor TEXT DEFAULT '',
      image TEXT DEFAULT '',
      schedule TEXT DEFAULT '',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )
  `);
  await run(`
    CREATE TABLE IF NOT EXISTS videos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT DEFAULT '',
      youtube_url TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )
  `);
  await run(`
    CREATE TABLE IF NOT EXISTS gallery (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT DEFAULT '',
      url TEXT NOT NULL,
      type TEXT DEFAULT 'image',
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);
  await run(`
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at TEXT DEFAULT (datetime('now'))
    )
  `);

  const existing = await get("SELECT id FROM users WHERE username = ?", "admin");
  if (!existing) {
    const hash = bcrypt.hashSync("admin123", 10);
    await run(
      "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)",
      "admin",
      "admin@mosque.org",
      hash
    );
    console.log("Default admin created (username: admin, password: admin123)");
  }
}

let schemaInitialized = false;

function initSchemaSync() {
  if (schemaInitialized) return;
  schemaInitialized = true;
  // Fire and forget for local dev
  initSchema().catch((e) => console.error("Schema init error:", e));
}

export async function ensureAdmin() {
  // Only needed for serverless — called on cold start
  if (process.env.TURSO_DATABASE_URL) {
    await initSchema();
  }
}
