import generics from "./genericsTreatments.js";
class Treatment {
  productBody({ name, description, price, promotion, promotionPrice, image }) {
    generics.name(name);
    generics.description(description);
    generics.price(price);
    generics.promotionalPrice(promotion, promotionPrice);
    generics.checkDiscountPrice(promotion, promotionPrice, price);

    return {
      name,
      description,
      price,
      promotion,
      promotionPrice,
      image,
    };
  }

  basic({ name, description, price, promotion, promotionPrice, image }) {
    generics.basicCheckDiscountPrice(promotionPrice, price);

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
