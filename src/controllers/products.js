import prisma from "../lib/prisma.js";
import handlers from "../lib/handlers.js";
import treatment from "../lib/treatment.js";

class Products {
  async get(req, res) {
    let products;

    try {
      products = await prisma.product.findMany({});
    } catch (e) {
      const err = handlers.onError(e);
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

  async post(req, res) {
    let body;
    let product;

    try {
      body = treatment.productBody(req.body);
      product = await prisma.product.create({
        data: body,
      });
    } catch (e) {
      const err = handlers.onError(e);
      return res.status(err.status).json(err);
    }

    const responseObj = handlers.onSuccess({
      status: 201,
      message: "The product was successfully created!",
      secondaryMessage:
        "Great job! You're now officially a 'product maker'! Your products are so amazing that the competition is starting to break a sweat!",
      data: product,
    });

    return res.status(responseObj.status).json(responseObj);
  }
}

export default new Products();
