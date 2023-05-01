export default {
  name: {
    status: 400,
    message: "The name field is mandatory.",
    secondaryMessage:
      "Oops! It seems like the product name disappeared on the way. Maybe it got lost in some cloud out there?",
    emptyField: "name",
  },
  description: {
    status: 400,
    message: "The description field is mandatory.",
    secondaryMessage:
      "Oops! It looks like your request got shy and forgot to bring the description. Give it a little encouragement and see if it loosens up!",
    emptyField: "description",
  },
  price: {
    status: 400,
    message: "The price field is mandatory.",
    secondaryMessage:
      "Oops! Where's the price for this product? Did it hide on the label? Let's search together and see if we can find it!",
    emptyField: "price",
  },
  promotionalPriceEmpty: {
    status: 400,
    message:
      "When setting up a promotion, you need to send the promotional price.",
    secondaryMessage:
      "Oops! It looks like the promotional price got lost on the way. Did it go on sale and end up running away to somewhere else?",
    emptyField: "promotionPrice",
  },
  promotionalPrice: {
    status: 400,
    message: "The discount price cannot be higher than the regular price.",
    secondaryMessage:
      "Oops! It looks like someone is trying to play with mathematical logic here... The discount price cannot be greater than the regular price, unless you're in a parallel dimension where that makes sense!",
    emptyField: "promotionPrice",
  },
  productPatch: {
    status: 400,
    message: "The discount price cannot be higher than the regular price.",
    secondaryMessage:
      "Oops! It looks like someone is trying to play with mathematical logic here... The discount price cannot be greater than the regular price, unless you're in a parallel dimension where that makes sense!",
    emptyField: "promotionPrice",
  },
};