import errorMessages from "../lib/errorMessages.js";
import handlers from "../lib/handlers.js";
import jwt from "jsonwebtoken";

class Cookie {
  get(req, res, next) {
    const cookie = req.cookies?.jwt;
    let jwt_obj;

    try {
      jwt_obj = jwt.decode(cookie, process.env.JWT_SECRET);
    } catch (e) {
      console.log("Cookie not found");
    }

    req.user = jwt_obj;
    next();
  }

  getOrError(req, res, next) {
    const cookie = req.cookies?.jwt;
    let jwt_obj;
    function errorMessage() {
      return res
        .cookie("jwt", "", { httpOnly: true, maxAge: 1 })
        .status(404)
        .json(handlers.onError(errorMessages.emptyCookie));
    }

    if (!cookie) return errorMessage();

    try {
      jwt_obj = jwt.decode(cookie, process.env.JWT_SECRET);
    } catch (e) {
      return errorMessage();
    }

    req.user = jwt_obj;
    next();
  }
}

export default new Cookie();
