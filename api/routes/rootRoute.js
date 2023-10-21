// rootRoute.js
const express = require('express');
const rootRoute = express.Router();

// import routes
const noteRouter = require('./noteRoute');


rootRoute.use('/', noteRouter);

module.exports = rootRoute;
