import { Router, Response } from "express";
import bcrypt from "bcryptjs";
import { get, run } from "../db";
import { generateToken, AuthRequest } from "../auth";

const router = Router();

router.post("/login", async (req: AuthRequest, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Username and password required" });
    }
    const user = await get("SELECT * FROM users WHERE username = ?", username);
    if (!user || !bcrypt.compareSync(password, user.password_hash)) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = generateToken(user.id, user.username);
    res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;