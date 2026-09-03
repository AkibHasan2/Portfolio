import { Router } from "express";
import {
  listExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} from "../controllers/experience.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();
router.get("/", listExperience);
router.post("/", requireAuth, createExperience);
router.put("/:id", requireAuth, updateExperience);
router.delete("/:id", requireAuth, deleteExperience);

export default router;
