const router = require("express").Router();
const Favorite = require("../models/Favorite.model.js");
const User = require("../models/User.model.js");
const {canEdit} = require("../middleware/middlewares.js");

//get user's favorites
router.get("/", async (req, res, next) => {
  try {
    const favorites = await Favorite.find({
      user_id: req.user.id,
    }).populate("artist_id");
    return res.status(200).json(favorites);
  } catch (error) {
    next(error.message);
  }
});

//add favorite
router.post("/", async (req, res, next) => {
  try {
    const { artist_id } = req.body;
    const newFavorite = await Favorite.create({
      artist_id: artist_id,
      user_id: req.user.id,
    });
    return res.status(201).json(newFavorite);
  } catch (error) {
    next(error.message);
  }
});

//delete favorite
router.delete("/:favoriteId", canEdit, async (req, res, next) => {
  try {
    await Favorite.findByIdAndDelete(req.params.favoriteId);
    res.status(204).json(`favorite deleted`);
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
