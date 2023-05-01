import generics from "./treatments.js";
class Treatment {
  productBody({ name, description, price, promotion, promotionPrice, image }) {
    generics.checkValue(name, "name");
    generics.checkValue(description, "description");
    generics.checkValue(price, "price");
    generics.checkTwoValues(promotion, promotionPrice, "promotionalPriceEmpty");
    generics.greaterThan(promotionPrice, price, "promotionalPrice", promotion);

    return {
      name,
      description,
      price,
      promotion,
      promotionPrice,
      image,
    };
  }

  basicProduct({ name, description, price, promotion, promotionPrice, image }) {
    generics.greaterThan(promotionPrice, price, "productPatch");

    return {
      name,
      description,
      price,
      promotion,
      promotionPrice,
      image,
    };
  }

  toNumber(string) {
    const number = Number(string);

    if (isNaN(number))
      throw {
        success: false,
        status: 400,
        message:
          "The passed parameter is not a number and cannot be converted into one.",
        secondaryMessage:
          "Oops, it seems like you tried to trick the system by sending a word as if it were a number. Please try again with a real number, because we don't accept alphabets in place of numbers here!",
        wrongField: "id",
      };
    return number;
  }
}

export default new Treatment();
