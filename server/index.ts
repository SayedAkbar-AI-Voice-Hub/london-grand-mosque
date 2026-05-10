import app from "./app";
import { getDb, ensureAdmin } from "./db";

const PORT = parseInt(process.env.PORT || "4000", 10);

// Initialize local DB
if (!process.env.TURSO_DATABASE_URL) {
  getDb();
}

ensureAdmin().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

export default app;
