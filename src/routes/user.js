import controller from "../controllers/user.js";
import userSession from "../controllers/userSession.js";
import { Router } from "express";
const router = new Router();

router.post("/user", controller.post);
router.get("/user", controller.get);

router.post("/login", userSession.login);
router.delete("/logout", userSession.logout);

export default router;
