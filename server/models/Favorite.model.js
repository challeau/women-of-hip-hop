const { Schema } = require("mongoose");

const favoriteSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  artist_id: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
});

const Favorite = model("Favorite", favoriteSchema);

module.exports = Favorite;
