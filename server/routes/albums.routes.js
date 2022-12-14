// read, add and delete

const router = require("express").Router();
const Album = require("../models/Album.model.js");
const Artist = require("../models/Artist.model.js");
const { canEdit } = require("../middleware/middlewares.js");

// get all albums
router.get("/", async (req, res, next) => {
  try {
    const albums = await Album.find().populate('artist');
    return res.status(200).json(albums);
  } catch (error) {
    next(error.message);
  }
});

// get album by Id
router.get("/find/:albumId", async (req, res, next) => {
  try {
    const album = await Album.findById(req.params.albumId).populate('artist');
    res.status(200).json(album);
  } catch (error) {
    next(error.message);
  }
});

// get all of user's albums
router.get("/myAlbums", async (req, res, next) => {
  try {
    const myAlbums = await Album.find({ creatorId: String(req.user.id) }).populate('artist');
    res.status(200).json(myAlbums);
  } catch (error) {
    next(error.message);
  }
});

// add albums
router.post("/", async (req, res, next) => {
  try {
    const { name, picture, songs, artist } = req.body;
    const artistObj = await Artist.find({name: artist});
    if (!artistObj[0])
      return res.status(401).json({message: "We don't know this artist yet. Please create her page first."});
    const creatorId = req.user.id;
    const album = await Album.create({ name: name, picture: picture, songs: songs, artist: artistObj[0].id, creatorId: creatorId });
    res.status(201).json(album);
  } catch (error) {
    next(error);
  }
});

//update albums
router.patch("/:requestId", canEdit, async (req, res, next) => {
  try {
    const albumToUpdate = req.body;
    if (albumToUpdate.artist){
      const artistObj = await Artist.find({ name: albumToUpdate.artist });
      albumToUpdate.artist = artistObj[0].id;
    }
    const { requestId } = req.params;
    const updatedAlbum = await Album.findByIdAndUpdate(
      requestId,
      albumToUpdate,
      { new: true }
    );
    res.status(200).json(updatedAlbum);
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
