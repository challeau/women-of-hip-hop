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

// get one artist at random
router.get("/shuffle", async (req, res, next) => {
  try {
    const artists = await Artist.find({});
    const oneArtist = artists[await getRandomIndex()];
    if (oneArtist.albums.length > 0) oneArtist = oneArtist.populate("album");
    res.status(200).json(oneArtist);
  } catch (error) {
    next(error.message);
  }
});

// add artist to db
router.post("/", async (req, res, next) => {
  try {
    // const { name, picture, miniBio, albums, flagSong } = req.body;
    const artist = await Artist.create(req.body);
    artist.creatorId = req.user._id;
    res.status(201).json(oneArtist);
  } catch (error) {
    next(error.message);
  }
});

// delete artist from db
router.delete("/:artistId", canEdit, async (req, res, next) => {
  try {
    const id = req.params.artistId;
    if (!mongoose.isValidObjectId(id))
      throw { message: "Please provide a valid Id" };
    await Artist.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
