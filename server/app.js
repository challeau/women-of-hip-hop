// Connect to the database
require('./db');

const express = require('express');
const app = express();

const index = require('./routes/index');
app.use('/', index);

// authentification routes
const auth = require('./routes/auth.routes');
app.use('/auth', auth);

// Artists DB interactions routes
const artists = require('./routes/artists.routes');
app.use('/artists', artists);

// User's favorites list routes
const artists = require('./routes/artists.routes');
app.use('/artists', artists);

// protected routes
const { isAuthenticated } = require('../middleware/jwt.middleware'); /// CHECK WHERE MER PUT THE DIR
const protected = require('./routes/protected.routes');
app.use('/', isAuthenticated, protected);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;