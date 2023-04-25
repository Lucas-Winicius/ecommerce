class Treatment {
  productBody({ name, description, price, promotion, promotionPrice }) {
    if (!name)
      throw new ReferenceError({
        status: 400,
        message: "The name field is mandatory.",
        secondaryMessage:
          "Oops! It seems like the product name disappeared on the way. Maybe it got lost in some cloud out there?",
      });

    if (!description)
      throw new ReferenceError({
        status: 400,
        message: "The description field is mandatory.",
        secondaryMessage:
          "Oops! It looks like your request got shy and forgot to bring the description. Give it a little encouragement and see if it loosens up!",
      });

    if (!price)
      throw new ReferenceError({
        status: 400,
        message: "The price field is mandatory.",
        secondaryMessage:
          "Oops! Where's the price for this product? Did it hide on the label? Let's search together and see if we can find it!",
      });

    if (!!promotion && !promotionPrice)
      throw new ReferenceError({
        status: 400,
        message:
          "When setting up a promotion, you need to send the promotional price.",
        secondaryMessage:
          "Oops! It looks like the promotional price got lost on the way. Did it go on sale and end up running away to somewhere else?",
      });
  }
}

export default new Treatment();
