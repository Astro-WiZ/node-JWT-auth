import { Router } from "express";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.get("/profile", authenticate, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

export default router;
