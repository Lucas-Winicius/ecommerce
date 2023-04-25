// import prisma from "../lib/prisma.js";
import treatment from "../lib/treatment.js";

class Products {
  get(req, res) {
    const bodyParams = treatment.productBody(req.body);
    res.json(bodyParams);
  }

  post(req, res) {
    res.send("Produtos - Post");
  }
}

export default new Products();
