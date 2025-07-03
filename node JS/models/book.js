const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book title is required'],
    trim: true,
    maxLength: [100, 'Book title should not be more than 100 characters'],
  },
  author: {
    type: String,
    required: [true, 'Book author is required'],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, 'Book year is required'],
    min: [1900, 'Book year should not be less than 1900'],
    max: [new Date().getFullYear(), 'Year cannot be more than current year']
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Book', bookSchema);