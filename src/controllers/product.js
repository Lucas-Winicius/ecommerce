import prisma from "../lib/prisma.js";
import handlers from "../lib/handlers.js";
import validations from "../lib/Validations.js";

class Product {
  async get(req, res) {
    let product;

    try {
      const id = validations.toNumber(req.params.id);
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

  async delete(req, res) {
    let product;
    try {
      const id = validations.toNumber(req.params.id);
      product = await prisma.product.delete({
        where: { id },
      });
    } catch (e) {
      const err = handlers.onError(e);
      return res.status(err.status).json(err);
    }

    const responseObj = handlers.onSuccess({
      message: "Product successfully deleted.",
      secondaryMessage:
        "Product deleted! It may have gone to a parallel dimension or turned into cosmic dust, but here in our system, it no longer exists. Rest in peace (or pieces).",
      data: product,
    });

    return res.status(responseObj.status).json(responseObj);
  }

  async patch(req, res) {
    let product;
    try {
      const id = validations.toNumber(req.params.id);
      const body = validations.basicProduct(req.body);
      product = await prisma.product.update({
        where: { id },
        data: body,
      });
    } catch (e) {
      const err = handlers.onError(e);
      return res.status(err.status).json(err);
    }

    const responseObj = handlers.onSuccess({
      message: "Product successfully updated.",
      secondaryMessage:
        "Wow! You have successfully updated the product. We hope you didn't add anything too strange, like a dinosaur egg or a magic wand. Anyway, thanks for keeping our records up to date!",
      data: product,
    });

    return res.status(responseObj.status).json(responseObj);
  }
}

export default new Product();
