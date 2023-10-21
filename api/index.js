// index.js
require('dotenv').config();
const express = require('express');
const cors = require("cors");
const connectToDB = require('./config/database');
const rootRouter = require('./routes/rootRoute'); // Import the root router

const app = express();

app.use(express.json());
app.use(cors());

connectToDB();

app.use('/', rootRouter); // Use the root router for all routes

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
