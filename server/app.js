// Express
const express = require("express");
const app = express();
const cors = require('cors');

// Link frontend
app.use(cors({
  origin: ['http://localhost:3000', process.env.FRONTEND_URL],
  credentials: true
}));


// Link middleware
const { isAuthenticated } = require("./middleware/middlewares.js");

// Link error handler
//require('./error-handling')(app);

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require("dotenv").config();
require("./config")(app);

// Connect to the database
require("../db/index");

// Routing
const index = require("./routes/index.routes");
app.use("/", index);

// Authentification routes
const auth = require("./routes/auth.routes");
app.use("/auth", auth);

// Artists DB interactions routes
const artists = require("./routes/artists.routes");
app.use("/artists", isAuthenticated, artists);

// User's favorites list routes
const favorites = require("./routes/favorites.routes");
app.use("/favorites", isAuthenticated, favorites);

//Albums  list routes
const albums = require("./routes/albums.routes");
app.use("/albums", isAuthenticated, albums);


module.exports = app;
