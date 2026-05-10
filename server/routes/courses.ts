import { Router, Response } from "express";
import { all, get, run } from "../db";

const router = Router();

router.get("/", async (_req, res: Response) => {
  try {
    const courses = await all("SELECT * FROM courses ORDER BY created_at DESC");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res: Response) => {
  try {
    const { title, description, instructor, image, schedule } = req.body;
    if (!title) return res.status(400).json({ error: "Title required" });
    const result = await run(
      "INSERT INTO courses (title, description, instructor, image, schedule) VALUES (?, ?, ?, ?, ?)",
      title,
      description || "",
      instructor || "",
      image || "",
      schedule || ""
    );
    const course = await get("SELECT * FROM courses WHERE id = ?", result.lastInsertRowid);
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.put("/:id", async (req, res: Response) => {
  try {
    const { title, description, instructor, image, schedule } = req.body;
    const existing = await get("SELECT * FROM courses WHERE id = ?", req.params.id);
    if (!existing) return res.status(404).json({ error: "Not found" });
    await run(
      "UPDATE courses SET title = COALESCE(?, title), description = COALESCE(?, description), instructor = COALESCE(?, instructor), image = COALESCE(?, image), schedule = COALESCE(?, schedule), updated_at = datetime('now') WHERE id = ?",
      title,
      description,
      instructor,
      image,
      schedule,
      req.params.id
    );
    const course = await get("SELECT * FROM courses WHERE id = ?", req.params.id);
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:id", async (req, res: Response) => {
  try {
    const result = await run("DELETE FROM courses WHERE id = ?", req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: "Not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;