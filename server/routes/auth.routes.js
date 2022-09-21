const router = require("express").Router();
const User = require("../models/User.model");
const { canEdit, isAuthenticated } = require("../middleware/middlewares.js");
const jsonWebToken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const salt = 10;

//create user/signup
router.post("/signup", async (req, res, next) => {
  const { username, password, picture } = req.body;
  if (!password || !username) {
    return res.status(400).json({ message: "Please provide a username and a password." });
  }
  try {
    const generatedSalt = bcrypt.genSaltSync(salt);
    const hashedPassword = bcrypt.hashSync(password, generatedSalt);

    const newUser = {
      username,
      password: hashedPassword,
      picture: picture
    };
    const createdUser = await User.create(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    if (error.message.includes('E11000'))
      return res.status(400).json({ message: "This username is taken." });
    else
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
    res.status(200).json({token: token});
  } catch (error) {
    next(error);
  }
});

// change password
router.patch("/change-password", isAuthenticated, async (req, res, next) => {
  try {
    console.log(req.user);
    const userId = req.user.id;
    const newPassword = req.body.password;
    const generatedSalt = bcrypt.genSaltSync(salt);
    const hashedPassword = bcrypt.hashSync(newPassword, generatedSalt);

    if (!newPassword)
      return res.status(401).json({ message: "Please provide a new password." });
    if (!userId)
      return res.status(401).json({ message: "Bruh." });
    const updateUser = await User.findByIdAndUpdate(userId, {password: hashedPassword}, {new: true});
    return res.status(200).json(createdUser);
  } catch (error){
    next(error);
  }
});

// change user picture
router.patch("/change-picture", isAuthenticated, async(req, res, next) => {
  try {
    const newPicture = req.body;
    const userId = req.user.id;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      newPicture,
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});

// delete user
router.delete("/:requestId", isAuthenticated, canEdit, async (req, res, next) => {
    try {
      await User.findByIdAndDelete(req.params.requestId);
      res.status(204).json(`user deleted`);
    } catch (error) {
      next(error.message);
    }
  }
);

// verify jwt
router.post("/verify", async (req, res, next) => {
  const token = req.body.token;

  if (!token)
    return res.status(403)
    .json({message: "A token is required for authentication"});
  try {
    const decoded = jsonWebToken.verify(token, process.env.TOKEN_SECRET);
    const loggedUser = await User.findOne({username: decoded.username});    
    return (res.status(200).json({user: loggedUser}));
  } catch (err) {
    return res.status(401).json({message: "Invalid Token"});
  }
  return next();
});

module.exports = router;
