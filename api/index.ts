import app from "../server/app";
import { ensureAdmin } from "../server/db";

// Vercel serverless handler
export default async function handler(req: any, res: any) {
  // Ensure schema + admin on cold start
  await ensureAdmin();
  return app(req, res);
}
