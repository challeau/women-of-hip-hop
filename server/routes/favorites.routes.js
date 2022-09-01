const router = require("express").Router();
const Favorite = require("../models/Favorite.model.js");
const Artist = require("../models/Artist.model.js");

//get favorites
router.get("/", async (req, res, next) => {
  try {
    const favorites = await Favorite.find().populate("artist_id");
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
      artist_id,
      user_id: req.user.id,
    });
    return res.status(201).json(newFavorite);
  } catch (error) {
    next(error.message);
  }
});

//delete favorite
router.delete("/:favoriteId", async (req, res, next) => {
  try {
    await Favorite.findByIdAndDelete(req.params.favoriteId);
    res.status(204).json(`favorite deleted`);
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
