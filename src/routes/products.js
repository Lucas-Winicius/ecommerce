import controllerProducts from "../controllers/products.js";
import controllerProduct from "../controllers/product.js";
import { Router } from "express";
const router = new Router();

router.get("/products", controllerProducts.get);
router.post("/products", controllerProducts.post);

router.get("/products/:id", controllerProduct.get);

export default router;
