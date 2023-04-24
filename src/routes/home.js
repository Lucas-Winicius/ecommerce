import controller from "../controllers/home.js";
import { Router } from "express";
const router = new Router();

router.get("/", controller.get);

export default router;
