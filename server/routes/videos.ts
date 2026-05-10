import { Router, Response } from "express";
import { all, get, run } from "../db";

const router = Router();

router.get("/", async (_req, res: Response) => {
  try {
    const videos = await all("SELECT * FROM videos ORDER BY created_at DESC");
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res: Response) => {
  try {
    const { title, description, youtube_url } = req.body;
    if (!title || !youtube_url) return res.status(400).json({ error: "Title and YouTube URL required" });
    const result = await run(
      "INSERT INTO videos (title, description, youtube_url) VALUES (?, ?, ?)",
      title,
      description || "",
      youtube_url
    );
    const video = await get("SELECT * FROM videos WHERE id = ?", result.lastInsertRowid);
    res.status(201).json(video);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.put("/:id", async (req, res: Response) => {
  try {
    const { title, description, youtube_url } = req.body;
    const existing = await get("SELECT * FROM videos WHERE id = ?", req.params.id);
    if (!existing) return res.status(404).json({ error: "Not found" });
    await run(
      "UPDATE videos SET title = COALESCE(?, title), description = COALESCE(?, description), youtube_url = COALESCE(?, youtube_url), updated_at = datetime('now') WHERE id = ?",
      title,
      description,
      youtube_url,
      req.params.id
    );
    const video = await get("SELECT * FROM videos WHERE id = ?", req.params.id);
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:id", async (req, res: Response) => {
  try {
    const result = await run("DELETE FROM videos WHERE id = ?", req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;