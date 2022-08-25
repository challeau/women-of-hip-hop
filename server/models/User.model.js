const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    String,
    required: [true, "Please provide a username."],
  },
  password: {
    String,
    required: [true, "Please provide a password."],
  } /* ,
  email: {
    String,
    required: [true, "Please provide an email."]

  } */,
  image: {
    String,
    default: "https://pbs.twimg.com/media/FE-7qY8WUAATlNV.jpg",
  },

  favoriteArtist: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  },
});

const User = model("User", userSchema);

module.exports = User;
