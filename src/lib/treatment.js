import generics from "./generics.js";
class Treatment {
  productBody({ name, description, price, promotion, promotionPrice }) {
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
    };
  }
}

export default new Treatment();
