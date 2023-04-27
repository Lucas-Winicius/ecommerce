import userTreatment from "../lib/userTreatment.js";
import handlers from "../lib/handlers.js";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

class User {
  async post(req, res) {
    let user;
    let userPrisma;

    try {
      user = await userTreatment.treatUser(req.body);
      userPrisma = await prisma.user.create({
        data: user,
      });
    } catch (e) {
      const err = handlers.onError(e);
      return res.status(err.status).json(err);
    }

    const token = jwt.sign(user, process.env.JWT_SECRET);
    token;

    const responseObj = handlers.onSuccess({
      status: 201,
      message: "User registered successfully.",
      secondaryMessage:
        "Great news! You're officially part of the gang now. Keep an eye out for exclusive perks and prizes headed your way! 🎁👀",
      data: userPrisma,
    });

    return res
      .cookie("jwt", token, { httpOnly: true, maxAge: 604800000 })
      .status(responseObj.status)
      .json(responseObj);
  }
}

export default new User();
