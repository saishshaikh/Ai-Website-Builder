import User from "../Models/User.Model.js";
import GenerateToken from "../Config/Token.js";

export const googleAuth = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, avatar });
    }

    // generate token
    const token = GenerateToken(user); // ✅ removed stray '/'

    // return user data and token in JSON
    return res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Google Auth Error " + error.message,
    });
  }
};

export const logOut = async (req, res) => {
  try {
    // Since we are not using cookies, just return a success message
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "Logout Error " + error.message,
    });
  }
};
