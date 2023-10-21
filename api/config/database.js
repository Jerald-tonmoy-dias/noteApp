const mongoose = require('mongoose');


async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('db connected');

  } catch (err) {
    console.log('someting went wrong from db: ', err)

  }
}

module.exports = connectToDB;