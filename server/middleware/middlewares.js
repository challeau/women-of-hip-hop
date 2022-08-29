const jsonWebToken = require("jsonwebtoken");
const User = require("../models/User.model");

const isAuthenticated = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ message: "No token found!" });
  }
  token = token.replace("Bearer ", "");
  const userToken = jsonWebToken.verify(token, process.env.TOKEN_SECRET);
  try {
    const user = await User.findOne({ username: userToken.username });
    if (!user) {
      return res.status(400).json({ message: "Invalid token" });
    }
    req.user = user;
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
  next();
};

const canEdit = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    console.log(req);
    return res.status(401).json({ message: "Sorry you're not allowed to do that !" });
  }
};

module.exports = { isAuthenticated, canEdit };
