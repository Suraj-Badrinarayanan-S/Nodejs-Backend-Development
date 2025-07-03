const mongoose = require('mongoose');

const connectDBAuth = async () => {
  try {
    await mongoose.connect('mongodb+srv://ssbn2125:ssbn2125@cluster0.flmnie4.mongodb.net/authDB');
    console.log('MongoDB Connected');
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
}
module.exports = connectDBAuth;