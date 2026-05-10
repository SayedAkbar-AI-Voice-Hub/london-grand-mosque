import express from "express";
import cors from "cors";
import path from "path";
import { getDb } from "./db";
import { requireAuth } from "./auth";
import authRoutes from "./routes/auth";
import postRoutes from "./routes/posts";
import eventRoutes from "./routes/events";
import bookRoutes from "./routes/books";
import courseRoutes from "./routes/courses";
import videoRoutes from "./routes/videos";
import galleryRoutes from "./routes/gallery";
import settingsRoutes from "./routes/settings";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Serve uploaded files (local dev only)
app.use("/uploads", express.static(path.join(import.meta.dirname, "uploads")));

// Public routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/settings", settingsRoutes);

// Protected routes
app.use("/api/admin/posts", requireAuth, postRoutes);
app.use("/api/admin/events", requireAuth, eventRoutes);
app.use("/api/admin/books", requireAuth, bookRoutes);
app.use("/api/admin/courses", requireAuth, courseRoutes);
app.use("/api/admin/videos", requireAuth, videoRoutes);
app.use("/api/admin/gallery", requireAuth, galleryRoutes);
app.use("/api/admin/settings", requireAuth, settingsRoutes);

export default app;
