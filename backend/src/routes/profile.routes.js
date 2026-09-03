import { Router } from "express";
import { getProfile, upsertProfile } from "../controllers/profile.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();
router.get("/", getProfile);                 // public
router.put("/", requireAuth, upsertProfile); // admin only

export default router;
