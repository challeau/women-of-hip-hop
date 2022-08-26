// We reuse this import in order to have access to the `body` property in requests
const express = require('express')

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
const logger = require('morgan')

// Middleware configuration
module.exports = (app) => {
  // In development environment the app logs
  app.use(logger('dev'))

  // To have access to `body` property in the request
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
}
