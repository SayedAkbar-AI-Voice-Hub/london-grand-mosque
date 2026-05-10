import { Router, Response } from "express";
import { all, get, run } from "../db";

const router = Router();

router.get("/", async (_req, res: Response) => {
  try {
    const items = await all("SELECT * FROM gallery ORDER BY created_at DESC");
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res: Response) => {
  try {
    const { title, url, type } = req.body;
    if (!url) return res.status(400).json({ error: "URL required" });
    const result = await run(
      "INSERT INTO gallery (title, url, type) VALUES (?, ?, ?)",
      title || "",
      url,
      type || "image"
    );
    const item = await get("SELECT * FROM gallery WHERE id = ?", result.lastInsertRowid);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:id", async (req, res: Response) => {
  try {
    const result = await run("DELETE FROM gallery WHERE id = ?", req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;