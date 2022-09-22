const express = require('express');
const app = express();
const cors = require('cors');

// messages in the terminal as requests are coming in
const logger = require('morgan');

// Middleware configuration
module.exports = (app) => {
  // In development environment the app logs
  app.use(logger('dev'));

  
  // Link frontend
  app.use(cors({
    origin: ['http://localhost:3000']  // <== URL of our future React app
  }));
  
  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
