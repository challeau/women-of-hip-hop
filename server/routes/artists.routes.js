const router = require('express').Router();
const Artist = require('../models/Artist.model.js');
const { isAuthenticated, canEdit } = require('../middleware/middlewares.js');

function getRandomIndex() {
  const rand = Math.floor(Math.random() * Artist.count());
  return (rand);
}

// // get all artists
// router.get('/shuffle', async (req, res, next) => {
//   try {
//     const oneArtist = Artist.find({})[getRandomIndex()];
//     console.log(oneArtist);
//     res.status(200).json(oneArtist.populate('album'));
//   } catch (error){
//     next(error.message);
//   }
// });

// // get one artist at random
// router.get('/shuffle', async (req, res, next) => {
//   try {
//     const oneArtist = Artist.find({})[getRandomIndex()];
//     console.log(oneArtist);
//     res.status(200).json(oneArtist.populate('album'));
//   } catch (error){
//     next(error.message);
//   }
// });



module.exports = router;
