const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trime: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trime: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);