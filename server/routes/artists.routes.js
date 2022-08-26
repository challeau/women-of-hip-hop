const router = require('express').Router();
const Artist = require('../models/Artist.model.js');
const { isAuthenticated, canEdit } = require('../middleware/middlewares.js');

async function getRandomIndex() {
  const rand = Math.floor(Math.random() * await Artist.count());
  return (rand);
}

// get all artists
router.get('/', async (req, res, next) => {
  try {
    const artists = await Artist.find({});
    res.json({artists});
  } catch (error) {
    next(error.message);
  }
});

// get one artist at random
router.get('/shuffle', async (req, res, next) => {
  try {
    const artists = await Artist.find({});
    const oneArtist = artists[await getRandomIndex()];
    if (oneArtist.albums.length > 0)
      oneArtist = oneArtist.populate('album');
    res.status(200).json(oneArtist);
  } catch (error){
    next(error.message);
  }
});



module.exports = router;
