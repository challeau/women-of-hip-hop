const express = require('express')

// messages in the terminal as requests are coming in
const logger = require('morgan')

// Middleware configuration
module.exports = (app) => {
  // In development environment the app logs
  app.use(logger('dev'))

  // To have access to `body` property in the request
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
}
