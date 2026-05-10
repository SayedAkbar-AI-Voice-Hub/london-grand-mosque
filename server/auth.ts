import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "mosque-secret-key-change-in-production";

export interface AuthRequest extends Request {
  userId?: number;
  username?: string;
}

export function generateToken(userId: number, username: string): string {
  return jwt.sign({ userId, username }, JWT_SECRET, { expiresIn: "7d" });
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const payload = jwt.verify(header.slice(7), JWT_SECRET) as {
      userId: number;
      username: string;
    };
    req.userId = payload.userId;
    req.username = payload.username;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}