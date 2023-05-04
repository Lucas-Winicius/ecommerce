import controllerProducts from "../controllers/products.js";
import controllerProduct from "../controllers/product.js";
import checkLogin from "../middleware/checkLogin.js";
import { Router } from "express";
const router = new Router();

router.get("/product", controllerProducts.get);
router.post("/product", controllerProducts.post);

router.get("/product/:id", controllerProduct.get);
router.delete("/product/:id", checkLogin.verify, controllerProduct.delete);
router.patch("/product/:id", checkLogin.verify, controllerProduct.patch);

export default router;
