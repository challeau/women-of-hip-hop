const router = require("express").Router();
const Favorite = require("../models/Artist.model.js");
const { canEdit } = require("../middleware/middlewares.js");

//get favorites
router.get("/", async (req, res, next) => {
  try {
    const favorites = await Favorite.find();
    return res.status(200).json(favorites);
  } catch (error) {
    next(error.message);
  }
});

//add favorite


module.exports = router;
