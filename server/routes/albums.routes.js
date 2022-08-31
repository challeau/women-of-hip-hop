// read, add and delete

const router = require("express").Router();
const Album = require("../models/Album.model.js");
const { canEdit } = require("../middleware/middlewares.js");

// read all albums
router.get("/", async (req, res, next) => {
  try {
    const albums = await Album.find();
    return res.status(200).json(albums);
  } catch (error) {
    next(error.message);
  }
});

// get album by Id
router.get("/:albumId", async (req, res, next) => {
  try {
    const album = await Album.findById(req.params.albumId);
    res.status(200).json(album);
  } catch (error) {
    next(error.message);
  }
});

// add albums
router.post("/", async (req, res, next) => {
  try {
    const { name, picture, songs } = req.body;
    const creatorId = req.user.id;
    const album = await Artist.create({ name, picture, songs, creatorId });
    res.status(201).json(album);
  } catch (error) {
    next(error.message);
  }
});

//update albums
router.patch("/:albumsId", canEdit, async (req, res, next) => {
  try {
    const albumToUpdate = req.body;
    const { albumsId } = req.params;
    const updatedAlbum = await Album.findByIdAndUpdate(
      albumsId,
      albumToUpdate,
      {
        new: true,
      }
    );
    res.json(updatedAlbum);
  } catch (error) {
    next(error.message);
  }
});

//delete albums
router.delete("/:albumsId", canEdit, async (req, res, next) => {
  try {
    await Album.findByIdAndDelete(req.params.albumsId);
    res.status(204).json(`album deleted`);
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
