const jsonWebToken = require("jsonwebtoken");
const User = require("../models/User.model");
const Artist = require("../models/Artist.model");

const isAuthenticated = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    const tokenSecret = `${process.env.TOKEN_SECRET}`;
    if (!token)
      throw({ message: "No token found!" });
    token = token.replace("Bearer ", "");
    const userToken = jsonWebToken.verify(token, tokenSecret);
    const user = await User.findOne({ username: userToken.username });
    if (!user)
      throw ({ message: "Invalid token." });
    req.user = user;
  } catch (error) {
    next (error.message);
  }
  next();
};

const canEdit = async (req, res, next) => {
  try {
    if (req.user.role === "admin")
      next();
    let artist = await Artist.findById(req.params.artistId);
    if (String(req.user._id) === String(artist.creatorId))
      next();
  } catch (error){
    res.status(401).json({ message: "Sorry you're not allowed to do that !" + error.message});
  }
};

module.exports = { isAuthenticated, canEdit };
