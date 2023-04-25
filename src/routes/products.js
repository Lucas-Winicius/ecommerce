import controller from "../controllers/products.js";
import { Router } from "express";
const router = new Router();

router.get("/products", controller.get);
router.post("/products", controller.post);

export default router;
