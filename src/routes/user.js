import controller from "../controllers/user.js";
import { Router } from "express";
const router = new Router();

router.post("/user", controller.post);
router.get("/user", controller.get);

export default router;
