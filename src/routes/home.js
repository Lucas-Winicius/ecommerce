import controller from "../controllers/home.js";
import { Router } from "express";
import cookie from "../middleware/cookie.js";
const router = new Router();

router.get("/", cookie.get, controller.get);

export default router;
