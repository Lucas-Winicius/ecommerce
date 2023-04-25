import prisma from "../lib/prisma.js";
import handlers from "../lib/handlers.js";

class Products {
  async get(req, res) {
    let products;

    try {
      products = await prisma.product.findMany({});
    } catch (e) {
      const err = handlers.onError({ data: e });
      return res.status(err.status).json(err);
    }

    const responseObj = handlers.onSuccess({
      message: "The products were successfully found!",
      secondaryMessage:
        "Wow, we found your products faster than Flash running after a villain! Congratulations, they were successfully found.",
      data: products,
    });

    return res.status(responseObj.status).json(responseObj);
  }

  post(req, res) {
    res.send("Produtos - Post");
  }
}

export default new Products();
