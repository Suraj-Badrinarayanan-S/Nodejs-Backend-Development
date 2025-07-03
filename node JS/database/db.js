const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://ssbn2125:ssbn2125@clustermongo.jd5zc96.mongodb.net/');
    console.log('MongoDB Connected');
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
}

module.exports = connectDB;

