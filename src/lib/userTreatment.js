import genericsTreatments from "./genericsTreatments.js";
import validator from "validator";
import argon2 from "argon2";

class UserTreatment {
  email(email) {
    if (!validator.isEmail(email))
      throw {
        status: 400,
        message: "Invalid email",
        secondaryMessage:
          "Sorry, it seems like your email is trying to hide from us. Is it perhaps a secret agent? 🕵️‍♂️📧 Please try again with a valid email!",
      };

    return String(email).toLowerCase();
  }

  async password(password) {
    if (password.length <= 8 || password.length > 255)
      throw {
        status: 400,
        message: "The password must be between 8 and 255 characters.",
        secondaryMessage:
          "Hmm, your password seems to be quite the rebel, breaking all the rules and marching to the beat of its own drum. Unfortunately, our system prefers more law-abiding passwords. 😜",
      };

    const T_password = await argon2.hash(password);

    return T_password;
  }

  async treatUser({ name, email, password, image }) {
    genericsTreatments.name(name);
    const T_email = this.email(email);
    const T_password = await this.password(password);

    return {
      name,
      image,
      email: T_email,
      password: T_password,
    };
  }
}

export default new UserTreatment();
