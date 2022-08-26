// Express
const express = require("express");
const app = express();

// Link middleware
const { isAuthenticated } = require("./middleware/middlewares.js");

// Link error handler
// require('./error-handling')(app);

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require("./config")(app);

// Connect to the database
require("../db")();

// Routing
const index = require("./routes/index.routes");
app.use("/", index);

// Authentification routes
const auth = require("./routes/auth.routes");
app.use("/auth", auth);


// Artists DB interactions routes
const artists = require("./routes/artists.routes");
// app.use('/artists', isAuthenticated, artists);
app.use("/artists", artists);

// User's favorites list routes
const favorites = require("./routes/favorites.routes");
app.use("/favorites", isAuthenticated, favorites);

module.exports = app;
