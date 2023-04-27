import express from "express";
import home from "./src/routes/home.js";
import products from "./src/routes/products.js";
import user from "./src/routes/user.js";
import cookieParser from "cookie-parser";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  routes() {
    this.app.use("/", home);
    this.app.use("/", products);
    this.app.use("/", user);
  }
}

export default new App().app;
