// read, add and delete

const router = require("express").Router();
const Album = require("../models/Album.model.js");
const { canEdit } = require("../middleware/middlewares.js");

// read albums
router.get("/", async (req, res, next) => {
  try {
    const albums = await Album.find();
    return res.status(200).json(albums);
  } catch (error) {
    next(error.message);
  }
});

//add albums
router.post("/", canEdit, async (req, res, next) => {
  try {
    const album = await req.body;
    const newAlbum = await Album.create(album);
    return res.status(201).json(newAlbum);
  } catch (error) {
    next(error.message);
  }
});

//update albums
router.patch("/:albumsId", async (req, res, next) => {
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
router.delete("/:albumId", canEdit, async (req, res, next) => {
  try {
    await Album.findByIdAndDelete(req.params.id);
    return res.sendStatus(204);
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
