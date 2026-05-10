import { Router, Response } from "express";
import { get, run } from "../db";

const router = Router();

// GET setting
router.get("/:key", async (req, res: Response) => {
  try {
    const row = await get("SELECT * FROM settings WHERE key = ?", req.params.key);
    if (!row) return res.status(404).json({ error: "Not found" });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// UPSERT setting
router.put("/:key", async (req, res: Response) => {
  try {
    const { value } = req.body;
    if (value === undefined) return res.status(400).json({ error: "Value required" });
    await run(
      "INSERT INTO settings (key, value, updated_at) VALUES (?, ?, datetime('now')) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at",
      req.params.key,
      String(value)
    );
    const row = await get("SELECT * FROM settings WHERE key = ?", req.params.key);
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;