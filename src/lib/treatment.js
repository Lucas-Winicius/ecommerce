import generics from "./generics.js";
class Treatment {
  productBody({ name, description, price, promotion, promotionPrice }) {
    generics.name(name);
    generics.description(description);
    generics.price(price);
    generics.promotionalPrice(promotion, promotionPrice);

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
