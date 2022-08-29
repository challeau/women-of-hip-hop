// read, add and delete

const router = require("express").Router();
const Album = require("../models/Album.model.js");
const { isAuthenticated, canEdit } = require("../middleware/middlewares.js");

// read
/**
 * All routes are prefixed with /albums
 */
router.get("/", async (req, res, next) => {
  try {
    const albums = await Album.find();
    return res.status(200).json(albums);
  } catch (error) {
    next(error.message);
  }
});

//add
router.post("/", canEdit, async (req, res, next) => {
  try {
    const album = await req.body;
    const newAlbum = await Album.create(album);
    return res.status(201).json(newAlbum);
  } catch (error) {
    next(error.message);
  }
});

//delete
router.delete(
  "/albums/:id",
  isAuthenticated,
  canEdit,
  async (req, res, next) => {
    try {
      await Album.findByIdAndDelete(req.params.id);
      return res.sendStatus(204);
    } catch (error) {
      next(error.message);
    }
  }
);

module.exports = router;
