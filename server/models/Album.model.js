const { Schema, model } = require("mongoose");

const albumSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide the album's name."],
  },
  picture: {
    type: String,
    required: [true, "Please provide a link to the album's picture."],
  },
  songs: {
    type: [String],
    required: [true, "Please provide the songs of the album."],
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
    required:  [true, "Please provide the main artist."]
  }
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Album = model("Album", albumSchema);

module.exports = Album;
