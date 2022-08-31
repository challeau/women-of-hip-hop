const ObjectId = require('mongoose').Types.ObjectId;
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

// checks for allowed crud operations
const canEdit = async (req, res, next) => {
  try {
    console.log(req);
    if (req.user.role === "admin")	// admins have full powers
      return next();
    else if (String(req.user.id) === String(req.params.requestId))	// for user-based operations
      return next();
    const id = req.params.artist.requestId;
    if (ObjectId.isValid(id) === false)
      throw ({ message: "Please provide a valid Id" });
    const artist = await Artist.findById(id);
    if (String(id) === String(artist.creatorId))	// for artist-based operations 
      return next();
    else
      throw ({message: "You cannot edit an artist you didn't create."});
  } catch (error){
    res.status(401).json({ message: `Sorry you're not allowed to do that ! ${error.message}`});
  }
};

module.exports = { isAuthenticated, canEdit };
