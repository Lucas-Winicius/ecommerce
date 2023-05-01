import errorMessages from "./errorMessages.js";

class Generics {
  checkValue(value, valueName) {
    if (!value) throw errorMessages[valueName];
  }

  checkTwoValues(value1, value2, valueName) {
    if (!!value1 && !value2) throw errorMessages[valueName];
  }

  greaterThan(x, y, valueName, condition = true) {
    if (!!condition && x > y) throw errorMessages[valueName];
  }
}

export default new Generics();
