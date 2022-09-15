const express = require('express');
const cors = require('cors');

// messages in the terminal as requests are coming in
const logger = require('morgan');

Middleware configuration
module.exports = (app) => {
  // In development environment the app logs
  app.use(logger('dev'));

//   app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested, Content-Type, Accept Authorization"
//     )
//     if (req.method === "OPTIONS") {
//       res.header(
//         "Access-Control-Allow-Methods",
//         "POST, PUT, PATCH, GET, DELETE"
//       )
//       return res.status(200).json({})
//     }
//     next()
//   })
  
  // app.set("trust proxy", 1);
  app.use(cors({
      origin: ['http://localhost:3000']  // <== URL of our future React app
    }));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
