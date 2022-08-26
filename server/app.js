// Express
const express = require('express');
const app = express();

// Link error handler
// require('./error-handling')(app);

// Connect to the database
// require('./db');

// Routing
const index = require('./routes/index.routes');
app.use('/', index);

// Authentification routes
const auth = require('./routes/auth.routes');
app.use('/auth', auth);

// Artists DB interactions routes
const artists = require('./routes/artists.routes');
app.use('/artists', artists);

// User's favorites list routes
const favorites = require('./routes/favorites.routes');
app.use('/favorites', favorites);

module.exports = app;