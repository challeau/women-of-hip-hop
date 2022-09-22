const { Schema, model } = require("mongoose");

const favoriteSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  artist_id: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
    unique: true,
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Favorite = model("Favorite", favoriteSchema);

module.exports = Favorite;
