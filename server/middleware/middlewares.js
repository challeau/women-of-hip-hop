const ObjectId = require('mongoose').Types.ObjectId;
const jsonWebToken = require("jsonwebtoken");
const User = require("../models/User.model");
const Artist = require("../models/Artist.model");
const Album = require("../models/Album.model");
const Favorite = require("../models/Favorite.model");

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
    const reqId = req.params.requestId;
    // if (ObjectId.isValid(reqId) === false)
    //   throw ({ message: "Please provide a valid Id" });
    if (req.user.role === "admin")	// admins have full powers
      return next();
    else if (String(req.user.id) === String(reqId))	// for user-based operations
      return next();
    // ?? -> nullish coalescing operator > returns the first non null/undefined value 
    let requestObj = await Artist.findById(reqId) ?? await Album.findById(reqId) ?? await Favorite.findById(reqId);
    if (requestObj !== null && String(req.user.id) === String(requestObj.creatorId))	// for artist-based operations 
      return next();
    else
      throw ({message: "You cannot edit an item you didn't create."});
  } catch (error){
    return res.status(401).json({ message: `Sorry you're not allowed to do that ! ${error.message}`});
  }
};

module.exports = { isAuthenticated, canEdit };
