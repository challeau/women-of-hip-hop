// Seed files
const User = require("../server/models/User.model");
const UserSeed = require("./seed/users.seed");
const Artist = require("../server/models/Artist.model");
const ArtistSeed = require("./seed/artists.seed");
const Album = require("../server/models/Album.model");
const AlbumSeed = require("./seed/albums.seed");
const Favorite = require("../server/models/Favorite.model");
const FavoriteSeed = require("./seed/favorites.seed");


// External vars
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../server/.env') });
const mongoose = require("mongoose");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/women-of-hip-hop";

// Open connection to db
async function openConnection() {
  try {
    console.log(`Connecting to database @ ${MONGO_URI}`);
    return await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.error(`Error while connecting to the database: ${error.message}`);
  }
}

// Seeds data from the seedfile provided
async function seedInit(model, seedFile) {
  if (model instanceof Album){
    const artists = await Artist.find().select({name: 1});
    for (const album in seedFile){
      const oneArtist = artists.find((artist) => album.artist === artist.name );
      console.log(album.name, oneArtist.id);
      album.artist = oneArtist.id;
    }
  }
  await model.deleteMany({});
  const documents = await model.insertMany(seedFile);
  console.log(`Seeded ${documents.length} documents.`);
}

// If the db has not been seeded yet, seed it. 
async function seedDatabase() {
  try {
    await openConnection();
    const doit = `${process.env.ISSEEDED}`;
    if (doit === 'false') {
      console.log('Seeding....');
      const seeds = [
	{ model: User, file: UserSeed },
	{ model: Artist, file: ArtistSeed },
	{ model: Album, file: AlbumSeed },
	{ model: Favorite, file: FavoriteSeed },
      ];
      for (const seed of seeds){
	await seedInit(seed.model, seed.file);
      }
      process.env.ISSEEDED = true;
    }
  } catch (error) {
    console.log(error.message);
  }
}

seedDatabase();

module.exports = seedDatabase;
