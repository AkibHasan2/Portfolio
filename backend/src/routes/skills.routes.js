import { Router } from "express";
import { listSkills, createSkill, updateSkill, deleteSkill } from "../controllers/skills.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();
router.get("/", listSkills);
router.post("/", requireAuth, createSkill);
router.put("/:id", requireAuth, updateSkill);
router.delete("/:id", requireAuth, deleteSkill);

export default router;
