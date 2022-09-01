// read, add and delete

const router = require("express").Router();
const Album = require("../models/Album.model.js");
const { canEdit } = require("../middleware/middlewares.js");

// read all albums
router.get("/", async (req, res, next) => {
  try {
    const albums = await Album.find();
    return res.status(200).json(albums.populate('artist'));
  } catch (error) {
    next(error.message);
  }
});

// get album by Id
router.get("/:albumId", async (req, res, next) => {
  try {
    const album = await Album.findById(req.params.albumId);
    res.status(200).json(album.populate('artist'));
  } catch (error) {
    next(error.message);
  }
});

// add albums
router.post("/", async (req, res, next) => {
  try {
    const { name, picture, songs, artist } = req.body;
    const creatorId = req.user.id;
    const album = await Album.create({ name, picture, songs, artist, creatorId });
    res.status(201).json(album);
  } catch (error) {
    next(error.message);
  }
});

//update albums
router.patch("/:requestId", canEdit, async (req, res, next) => {
  try {
    const albumToUpdate = req.body;
    const { requestId } = req.params;
    const updatedAlbum = await Album.findByIdAndUpdate(
      requestId,
      albumToUpdate,
      { new: true }
    );
    res.status(204).json(updatedAlbum);
  } catch (error) {
    next(error.message);
  }
});

//delete albums
router.delete("/:requestId", canEdit, async (req, res, next) => {
  try {
    await Album.findByIdAndDelete(req.params.requestId);
    res.status(204).json(`album deleted`);
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
