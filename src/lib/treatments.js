import errorMessages from "./errorMessages.js";
import validator from "validator";
import argon2 from "argon2";

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

  toNumber(string) {
    const number = Number(string);
    if (isNaN(number)) throw errorMessages.isNotNUmber;
    return number;
  }

  email(email) {
    if (!validator.isEmail(email)) throw errorMessages.email;

    return String(email).toLowerCase();
  }

  async password(password) {
    if (password.length <= 8 || password.length > 255)
      throw errorMessages.password;

    return await argon2.hash(password);
  }
}

export default new Generics();
