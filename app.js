import express from "express";
import home from "./src/routes/home.js";
import products from "./src/routes/products.js";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use("/", home);
    this.app.use("/", products);
  }
}

export default new App().app;
