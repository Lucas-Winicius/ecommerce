import prisma from "../lib/prisma.js";
import handlers from "../lib/handlers.js";
import treatment from "../lib/treatment.js";

class Product {
  async get(req, res) {
    let product;

    try {
      const id = treatment.toNumber(req.params.id);
      console.log(id);
      product = await prisma.product.findUnique({
        where: { id },
      });
    } catch (e) {
      const err = handlers.onError(e);
      return res.status(err.status).json(err);
    }

    const responseObj = handlers.onSuccess({
      message:
        "Congratulations! The product was found successfully. Enjoy your purchase!",
      secondaryMessage:
        "Congratulations, you found the product! Now you can go back to your normal procrastination programming. Or, who knows, keep searching for other hidden treasures in our system!",
      data: product || {},
    });

    return res.status(responseObj.status).json(responseObj);
  }
}

export default new Product();
