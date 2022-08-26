const router = require("express").Router();
const User = require("../models/User.model");
const jsonWebToken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const salt = 10;

const { isAuthenticated } = require("../middleware/middlewares");

router.post("/signup", async (req, res, next) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (!password || !username) {
    return res
      .status(400)
      .json({ message: "Please provide a valid password and username." });
  }
  try {
    const generatedSalt = bcrypt.genSaltSync(salt);
    const hashedPassword = bcrypt.hashSync(password, generatedSalt);

    const newUser = {
      username,
      password: hashedPassword,
    };
    const createdUser = await User.create(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    next(error.message);
  }
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide username and password" });
  }
  try {
    const foundUser = await User.findOne({ username });
    if (!foundUser) {
      return res.status(400).json({ message: "wrong credentials" });
    }
    const matchingPassword = bcrypt.compareSync(password, foundUser.password);
    if (!matchingPassword) {
      return res.status(400).json({ message: "wrong credentials" });
    }

    const payload = { username };
    console.log(process.env.TOKEN_SECRET)
    const token = jsonWebToken.sign(payload, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "1h",
    });
    res.status(200).json(token);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
