

const favorites = [];


/* mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
const seedFavorites = async () => {
  const allArtists = await Artist.find();
  const allUser = await User.find();
  await Favorite.deleteMany({});
  for (let i = 0; i < 2; i++) {
    const favorite = {
      user_id: getRandomFrom(allUser),
      artist_id: getRandomFrom(allArtists),
    };
    favorites.push(favorite);
  }
  await Favorite.insertMany(favorites);
};
seedFavorites().then(() => {
  mongoose.connection.close();
});

function getRandomFrom(array) {
  return array[Math.floor(Math.random() * array.length)]._id;
}
 */

module.exports = favorites;
