const mongoose = require('mongoose');
const config = require('config');
const dotenv = require('dotenv').config()
// const db = config.get('mongoURI');
const db = process.env.mongoURI
// const dboffline = config.get('offineURL');
const dboffline = process.env.offineURI
const dbonline = process.env.mongoURI_NEW

const connectDB = async () => {
  try {
    await mongoose.connect(
      dbonline,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
