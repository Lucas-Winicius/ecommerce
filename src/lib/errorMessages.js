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
  isNotNUmber: {
    status: 400,
    message:
      "The passed parameter is not a number and cannot be converted into one.",
    secondaryMessage:
      "Oops, it seems like you tried to trick the system by sending a word as if it were a number. Please try again with a real number, because we don't accept alphabets in place of numbers here!",
    wrongField: "id",
  },
  email: {
    status: 400,
    message: "Invalid email",
    secondaryMessage:
      "Sorry, it seems like your email is trying to hide from us. Is it perhaps a secret agent? 🕵️‍♂️📧 Please try again with a valid email!",
    wrongField: "email",
  },
  password: {
    status: 400,
    message: "The password must be between 8 and 255 characters.",
    secondaryMessage:
      "Hmm, your password seems to be quite the rebel, breaking all the rules and marching to the beat of its own drum. Unfortunately, our system prefers more law-abiding passwords. 😜",
    wrongField: "password",
  },
  unauthorized: {
    status: 401,
    message: "Invalid Credentials",
    secondaryMessage:
      "Sorry, it looks like you're not logged in yet. Please log in to proceed. Otherwise, the magical unicorns that grant access to our system won't be able to recognize you. 🦄✨",
  },
  invalidCredentials: {
    status: 401,
    message: "Invalid Credentials",
    secondaryMessage:
      "Oops! It looks like your login credentials are incorrect. Please check and try again. Otherwise, a mischievous troll might be trying to access your account. 🧙‍♂️🔮",
  },
  emptyCookie: {
    status: 401,
    message: "Access denied. You need to log in to perform this action.",
    secondaryMessage:
      "Oops! Looks like you're not logged in. Time to enter your secret passcode and unlock the mysteries of this feature!",
  },
};
