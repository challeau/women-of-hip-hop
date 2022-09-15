const router = require("express").Router();
const User = require("../models/User.model");
const { canEdit, isAuthenticated } = require("../middleware/middlewares.js");
const jsonWebToken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const salt = 10;

//create user/signup
router.post("/signup", async (req, res, next) => {
  const { username, password, image } = req.body;
  if (!password || !username) {
    return res.status(400).json({ message: "Please provide a username and a password." });
  }
  try {
    const user = await User.findById(req.params.userId);
    if (user)
      res.status(400).json({message: "This username is taken."})
    const generatedSalt = bcrypt.genSaltSync(salt);
    const hashedPassword = bcrypt.hashSync(password, generatedSalt);

    const newUser = {
      username,
      password: hashedPassword,
      image: image
    };
    const createdUser = await User.create(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
});

//get all users
router.get("/users", async (req, res, next) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    next(error.message);
  }
});

//get user by ID
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (error) {
    next(error.message);
  }
});

//login
router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide a username and a password" });
  }
  try {
    const foundUser = await User.findOne({ username });
    if (!foundUser) {
      return res.status(400).json({ message: "Wrong credentials: double check your username." });
    }
    const matchingPassword = bcrypt.compareSync(password, foundUser.password);
    if (!matchingPassword) {
      return res.status(400).json({ message: "Wrong credentials: double check your password." });
    }

    const payload = { username };
    const tokenSecret = `${process.env.TOKEN_SECRET}`;
    const token = jsonWebToken.sign(payload, tokenSecret, {
      algorithm: "HS256",
      expiresIn: "1h",
    });
    res.status(200).json({token: token, user: foundUser});
  } catch (error) {
    next(error);
  }
});

//delete user
router.delete(
  "/:requestId",
  isAuthenticated,
  canEdit,
  async (req, res, next) => {
    try {
      await User.findByIdAndDelete(req.params.requestId);
      res.status(204).json(`user deleted`);
    } catch (error) {
      next(error.message);
    }
  }
);

module.exports = router;
