import { Router, Response } from "express";
import { all, get, run } from "../db";

const router = Router();

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// GET all published posts (public)
router.get("/", async (_req, res: Response) => {
  try {
    const posts = await all(
      "SELECT id, title, slug, excerpt, image, published, created_at, updated_at FROM posts WHERE published = 1 ORDER BY created_at DESC"
    );
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET single post by slug (public)
router.get("/:slug", async (req, res: Response) => {
  try {
    const post = await get("SELECT * FROM posts WHERE slug = ?", req.params.slug);
    if (!post) return res.status(404).json({ error: "Not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET all posts including drafts (admin)
router.get("/admin/all", async (_req, res: Response) => {
  try {
    const posts = await all("SELECT * FROM posts ORDER BY created_at DESC");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// CREATE post
router.post("/", async (req, res: Response) => {
  try {
    const { title, content, excerpt, image, published } = req.body;
    if (!title) return res.status(400).json({ error: "Title required" });
    let slug = slugify(title);
    const existing = await get("SELECT id FROM posts WHERE slug = ?", slug);
    if (existing) slug += "-" + Date.now();
    const result = await run(
      "INSERT INTO posts (title, slug, content, excerpt, image, published) VALUES (?, ?, ?, ?, ?, ?)",
      title,
      slug,
      content || "",
      excerpt || "",
      image || "",
      published ? 1 : 0
    );
    const post = await get("SELECT * FROM posts WHERE id = ?", result.lastInsertRowid);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// UPDATE post
router.put("/:id", async (req, res: Response) => {
  try {
    const { title, content, excerpt, image, published } = req.body;
    const existing = await get("SELECT * FROM posts WHERE id = ?", req.params.id);
    if (!existing) return res.status(404).json({ error: "Not found" });
    await run(
      "UPDATE posts SET title = COALESCE(?, title), content = COALESCE(?, content), excerpt = COALESCE(?, excerpt), image = COALESCE(?, image), published = COALESCE(?, published), updated_at = datetime('now') WHERE id = ?",
      title,
      content,
      excerpt,
      image,
      published !== undefined ? (published ? 1 : 0) : undefined,
      req.params.id
    );
    const post = await get("SELECT * FROM posts WHERE id = ?", req.params.id);
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE post
router.delete("/:id", async (req, res: Response) => {
  try {
    const result = await run("DELETE FROM posts WHERE id = ?", req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;