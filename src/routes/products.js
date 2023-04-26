import controllerProducts from "../controllers/products.js";
import controllerProduct from "../controllers/product.js";
import { Router } from "express";
const router = new Router();

router.get("/products", controllerProducts.get);
router.post("/products", controllerProducts.post);

router.get("/products/:id", controllerProduct.get);
router.delete("/products/:id", controllerProduct.delete);
router.patch("/products/:id", controllerProduct.patch);

export default router;
