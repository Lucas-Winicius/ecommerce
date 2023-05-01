import treatments from "./treatments.js";

class Validations {
  productBody({ name, description, price, promotion, promotionPrice, image }) {
    treatments.checkValue(name, "name");
    treatments.checkValue(description, "description");
    treatments.checkValue(price, "price");
    treatments.checkTwoValues(
      promotion,
      promotionPrice,
      "promotionalPriceEmpty"
    );
    treatments.greaterThan(
      promotionPrice,
      price,
      "promotionalPrice",
      promotion
    );

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
    treatments.greaterThan(promotionPrice, price, "productPatch");

    return {
      name,
      description,
      price,
      promotion,
      promotionPrice,
      image,
    };
  }

  async userBody({ name, email, password, image }) {
    treatments.checkValue(name, "name");
    const T_email = treatments.email(email);
    const T_password = await treatments.password(password);

    return {
      name,
      image,
      email: T_email,
      password: T_password,
    };
  }
}

export default new Validations();
