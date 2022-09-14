const express = require('express')
const cors = require('cors');

// messages in the terminal as requests are coming in
const logger = require('morgan')

// Middleware configuration
module.exports = (app) => {
  // In development environment the app logs
  app.use(logger('dev'))

  app.use(
    cors({
      origin: ['http://localhost:3000']
    })
  );

  // To have access to `body` property in the request
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
}
