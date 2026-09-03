import { Router } from "express";
import { listProjects, createProject, updateProject, deleteProject } from "../controllers/projects.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();
router.get("/", listProjects);                 // public
router.post("/", requireAuth, createProject);  // admin only
router.put("/:id", requireAuth, updateProject);
router.delete("/:id", requireAuth, deleteProject);

export default router;
