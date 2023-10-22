// rootRoute.js
const express = require('express');
const rootRoute = express.Router();

// import routes
const noteRouter = require('./noteRoute');
const userRouter = require('./userRoute');

rootRoute.use('/', userRouter);
rootRoute.use('/', noteRouter);

module.exports = rootRoute;
