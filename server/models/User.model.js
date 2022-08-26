const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please provide a username."],
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
  },
  image: {
    type: String,
    default: "https://pbs.twimg.com/media/FE-7qY8WUAATlNV.jpg",
  },

  favoriteArtist: {
    type: [Schema.Types.ObjectId],
    ref: "User",
  },
});

const User = model("User", userSchema);

module.exports = User;
