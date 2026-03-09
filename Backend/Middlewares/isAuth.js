import jwt from "jsonwebtoken";
import User from "../Models/User.js";

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized token not found" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decode.id);

    next();

  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error :: Invalid token"
    });
  }
};

export default isAuth;
