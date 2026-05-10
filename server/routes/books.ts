import { Router, Response } from "express";
import { all, get, run } from "../db";

const router = Router();

router.get("/", async (_req, res: Response) => {
  try {
    const books = await all("SELECT * FROM books ORDER BY created_at DESC");
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res: Response) => {
  try {
    const { title, author, description, cover_image, file_url } = req.body;
    if (!title) return res.status(400).json({ error: "Title required" });
    const result = await run(
      "INSERT INTO books (title, author, description, cover_image, file_url) VALUES (?, ?, ?, ?, ?)",
      title,
      author || "",
      description || "",
      cover_image || "",
      file_url || ""
    );
    const book = await get("SELECT * FROM books WHERE id = ?", result.lastInsertRowid);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.put("/:id", async (req, res: Response) => {
  try {
    const { title, author, description, cover_image, file_url } = req.body;
    const existing = await get("SELECT * FROM books WHERE id = ?", req.params.id);
    if (!existing) return res.status(404).json({ error: "Not found" });
    await run(
      "UPDATE books SET title = COALESCE(?, title), author = COALESCE(?, author), description = COALESCE(?, description), cover_image = COALESCE(?, cover_image), file_url = COALESCE(?, file_url), updated_at = datetime('now') WHERE id = ?",
      title,
      author,
      description,
      cover_image,
      file_url,
      req.params.id
    );
    const book = await get("SELECT * FROM books WHERE id = ?", req.params.id);
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:id", async (req, res: Response) => {
  try {
    const result = await run("DELETE FROM books WHERE id = ?", req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;