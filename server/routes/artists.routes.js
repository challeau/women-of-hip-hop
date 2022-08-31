const router = require("express").Router();
const Artist = require("../models/Artist.model.js");
const User = require("../models/User.model.js");
const { isAuthenticated, canEdit } = require("../middleware/middlewares.js");

async function getRandomIndex() {
  const rand = Math.floor(Math.random() * (await Artist.count()));
  return rand;
}

// get all artists
router.get("/", async (req, res, next) => {
  try {
    const artists = await Artist.find({});
    res.json({ artists });
  } catch (error) {
    next(error.message);
  }
});

// get one artist by id
router.get("/:artistId", async (req, res, next) => {
  try {
    const artist = await Artist.findById(req.params.artistId);
    res.status(200).json(artist);
  } catch (error) {
    next(error.message);
  }
});

// get one artist at random
router.get("/shuffle", async (req, res, next) => {
  try {
    const artists = await Artist.find({});
    const oneArtist = artists[await getRandomIndex()];
    if (oneArtist.albums.length > 0)
      oneArtist = oneArtist.populate("album");
    res.status(200).json(oneArtist);
  } catch (error) {
    next(error.message);
  }
});

// add artist to db
router.post('/', async (req, res, next) => {
  try {
    const { name, picture, miniBio, albums, flagSong } = req.body;
    const creatorId = req.user.id;
    const artist = await Artist.create({name, picture, miniBio, albums, flagSong, creatorId});
    res.status(201).json(artist);
  } catch (error) {
    next(error.message);
  }
});

// delete artist from db
router.delete("/:artistId", isAuthenticated, canEdit, async (req, res, next) => {
  try {
    const id = req.params.artistId;
    await Artist.findByIdAndDelete(id);
    res.status(204).json({message: "Artist was deleted."})
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
