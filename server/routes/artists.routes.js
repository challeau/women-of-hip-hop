const router = require("express").Router();
const Artist = require("../models/Artist.model.js");
const User = require("../models/User.model.js");
const { canEdit } = require("../middleware/middlewares.js");

async function getRandomIndex() {
  const rand = Math.floor(Math.random() * (await Artist.count()));
  return rand;
}

// get all artists
router.get("/", async (req, res, next) => {
  try {
    const artists = await Artist.find({});
    res.status(200).json({ artists });
  } catch (error) {
    next(error.message);
  }
});

// get one artist by id
router.get("/find/:artistId", async (req, res, next) => {
  try {
    const artist = await Artist.findById(req.params.artistId);
    res.status(200).json(artist);
  } catch (error) {
    next(error.message);
  }
});

// get all of user's artists
router.get("/myArtists", async (req, res, next) => {
  try {
    const myArtists = await Artist.find({ creatorId: String(req.user.id) });
    res.status(200).json(myArtists);
  } catch (error) {
    next(error.message);
  }
});


// get one artist at random
router.get("/shuffle", async (req, res, next) => {
  try {
    const artists = await Artist.find({});
    const oneArtist = artists[await getRandomIndex()];
    res.status(200).json(oneArtist);
  } catch (error) {
    next(error.message);
  }
});

// add artist to db
router.post('/', async (req, res, next) => {
  try {
    const { name, picture, miniBio, flagSong } = req.body;
    const creatorId = req.user.id;
    const artist = await Artist.create({name: name, picture: picture,
					miniBio: miniBio, flagSong: flagSong, creatorId: creatorId});
    res.status(201).json(artist);
  } catch (error) {
    next(error.message);
  }
});

// update artist
router.patch("/:requestId", canEdit, async (req, res, next) => {
  try {
    const artistToUpdate = req.body;
    const { requestId } = req.params;
    const updatedArtist = await Artist.findByIdAndUpdate(
      requestId,
      artistToUpdate,
      { new: true }
    );
    res.status(200).json(updatedArtist);
  } catch (error) {
    next(error.message);
  }
});

// delete artist from db
router.delete("/:requestId", canEdit, async (req, res, next) => {
  try {
    const id = req.params.requestId;
    await Artist.findByIdAndDelete(id);
    res.status(204).json({message: "Artist was deleted."});
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
