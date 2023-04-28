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

    const token = jwt.sign(
      { name: user.name, email: user.email, password: user.password },
      process.env.JWT_SECRET
    );

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

  async get(req, res) {
    console.log(req.hostname);
    function errorMessage() {
      return res
        .cookie("jwt", "", { httpOnly: true, maxAge: 1 })
        .status(404)
        .json({
          success: true,
          status: 404,
          message: "User not found",
          secondaryMessage:
            "Oops, it seems like the user you are looking for has mysteriously disappeared, maybe ran away to a deserted island. 🏝️🕵️‍♀️ Please try again",
          error: {},
        });
    }

    const cookie = req.cookies?.jwt;
    let jwt_obj;
    let user;

    if (!cookie) return errorMessage();

    try {
      jwt_obj = jwt.decode(cookie, process.env.JWT_SECRET);
      user = await prisma.user.findFirst({
        where: { email: jwt_obj.email, password: jwt_obj.password },
      });
    } catch (e) {
      const err = handlers.onError(e);
      return res.status(err.status).json(err);
    }

    if (!user) return errorMessage();

    const responseObj = handlers.onSuccess({
      status: 200,
      message: "User found.",
      secondaryMessage:
        "Congratulations! We found your lost unicorn, err... we mean user! 🦄🕵️‍♀️ Welcome back!",
      data: user,
    });

    res.status(200).json(responseObj);
  }
}

export default new User();
