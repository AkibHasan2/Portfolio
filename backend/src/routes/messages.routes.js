import { Router } from "express";
import { createMessage, listMessages, markMessageRead } from "../controllers/messages.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();
router.post("/", createMessage);                 // public: contact form submit
router.get("/", requireAuth, listMessages);       // admin only: inbox
router.put("/:id/read", requireAuth, markMessageRead);

export default router;
