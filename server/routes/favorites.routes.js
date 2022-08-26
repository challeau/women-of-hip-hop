const router = require('express').Router();
const Artist = require('../models/Artist.model.js');
const { isAuthenticated, canEdit } = require('../middleware/middlewares.js');


module.exports = router;
