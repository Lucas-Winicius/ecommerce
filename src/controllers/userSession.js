import handlers from "../lib/handlers.js";
import prisma from "../lib/prisma.js";
import argon2d from "argon2";
import jwt from "jsonwebtoken";

class UserSession {
  async login(req, res) {
    let user;

    try {
      user = await prisma.user.findFirst({
        where: {
          email: String(req.body.email).toLocaleLowerCase(),
        },
      });

      if (!user)
        throw {
          status: 404,
          message: "User not found",
          data: user,
        };

      const validHash = await argon2d.verify(user.password, req.body.password);

      if (!validHash)
        throw {
          status: 401,
          message: "Invalid password",
          secondaryMessage:
            "Incorrect password! Oops! Looks like someone is having trouble remembering their password! 🤔 Don't worry, it's common when you have too many passwords to remember. Try again, maybe the next password will be the right one?",
        };
    } catch (e) {
      const err = handlers.onError(e);
      return res.status(err.status).json(err);
    }

    const token = jwt.sign(
      { name: user.name, email: user.email, password: req.body.password },
      process.env.JWT_SECRET
    );

    const responseObj = handlers.onSuccess({
      status: 201,
      message: "User logged in successfully",
      secondaryMessage:
        "Yay! You successfully hacked into our system. 👨‍💻🕵️‍♂️But don't worry, we won't tell anyone. Welcome back!",
      data: user,
    });

    return res
      .cookie("jwt", token, { httpOnly: true, maxAge: 604800000 })
      .status(responseObj.status)
      .json(responseObj);
  }
}

export default new UserSession();
