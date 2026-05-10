import { Router, Response } from "express";
import { all, get, run } from "../db";

const router = Router();

// GET all events
router.get("/", async (_req, res: Response) => {
  try {
    const events = await all("SELECT * FROM events ORDER BY date ASC");
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// CREATE event
router.post("/", async (req, res: Response) => {
  try {
    const { title, date, location, description, image } = req.body;
    if (!title || !date) return res.status(400).json({ error: "Title and date required" });
    const result = await run(
      "INSERT INTO events (title, date, location, description, image) VALUES (?, ?, ?, ?, ?)",
      title,
      date,
      location || "",
      description || "",
      image || ""
    );
    const event = await get("SELECT * FROM events WHERE id = ?", result.lastInsertRowid);
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// UPDATE event
router.put("/:id", async (req, res: Response) => {
  try {
    const { title, date, location, description, image } = req.body;
    const existing = await get("SELECT * FROM events WHERE id = ?", req.params.id);
    if (!existing) return res.status(404).json({ error: "Not found" });
    await run(
      "UPDATE events SET title = COALESCE(?, title), date = COALESCE(?, date), location = COALESCE(?, location), description = COALESCE(?, description), image = COALESCE(?, image), updated_at = datetime('now') WHERE id = ?",
      title,
      date,
      location,
      description,
      image,
      req.params.id
    );
    const event = await get("SELECT * FROM events WHERE id = ?", req.params.id);
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE event
router.delete("/:id", async (req, res: Response) => {
  try {
    const result = await run("DELETE FROM events WHERE id = ?", req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;