const Album = require("../server/models/Album.model");
const AlbumSeed = require("./seed/albums.seed");
const Favorite = require("../server/models/Favorite.model");
const FavoriteSeed = require("./seed/favorites.seed");
const Artist = require("../server/models/Artist.model");
const ArtistSeed = require("./seed/artists.seed");
const User = require("../server/models/User.model");
const UserSeed = require("./seed/users.seed");

// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/women-of-hip-hop";

async function openConnection() {
  try {
    return await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.error(`Error while connecting to the database: ${error.message}`);
  }
}

async function seedInit(model, seedFile) {
  await model.deleteMany();
  const documents = await model.insertMany(seedFile);
  console.log(`Seeded ${documents.length} document`);
}

async function seedDatabase() {
  try {
    const db = await openConnection();
    //const model = Album;
    if (`${process.env.ISSEEDED}` === false) {
      const models = [
        { User, UserSeed },
        { Artist, ArtistSeed },
        { Album, AlbumSeed },
        { Favorite, FavoriteSeed },
      ];
      for (const model of models) {
        console.log(model);
        await seedInit(model);
      }
    }
    /*  await Artist.deleteMany();
    await User.deleteMany();
    await Favorite.deleteMany();
    await mongoose.disconnect(); */
    await mongoose.disconnect();
  } catch (error) {
    console.log(error.message);
  }
}

/*
const seedArtists = async () => {
  await Artist.deleteMany({});
  await Artist.insertMany(artists);
};
seedArtists().then(() => {
  mongoose.connection.close();
});

*/

seedDatabase();

module.exports = openConnection;
