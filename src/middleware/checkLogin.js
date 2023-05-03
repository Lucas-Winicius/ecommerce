import handlers from "../lib/handlers.js";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import errorMessages from "../lib/errorMessages.js";
import argon2 from "argon2";

class CheckLogin {
  async verify(req, res, next) {
    const cookie = req.cookies?.jwt;
    let user;
    let jwt_obj;
    let passMatch;

    if (!cookie) {
      return res.status(401).json(handlers.onError(errorMessages.unauthorized));
    }

    try {
      jwt_obj = jwt.decode(cookie, process.env.JWT_SECRET);
      user = await prisma.user.findFirst({
        where: { email: jwt_obj.email },
      });

      if (!user) {
        return res
          .status(401)
          .json(handlers.onError(errorMessages.unauthorized));
      }

      passMatch = await argon2.verify(user?.password, jwt_obj?.password);
    } catch (e) {
      const err = handlers.onError(e);
      return res.status(err.status).json(err);
    }

    if (!passMatch) {
      return res
        .status(401)
        .json(handlers.onError(errorMessages.invalidCredentials));
    }

    next();
  }
}

export default new CheckLogin();
