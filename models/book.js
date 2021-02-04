const mongoose = require('mongoose');
const Rating = require('./rating');
const ratingSchema = Rating.schema
//books Schema

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date;
  },
  isbn: {
    type: Number,
    required: true
  },
  copies: {
    type: Number,
    required: true
  },
  rating: [ ratingSchema ]
}, {
  timestamps: true
})

module.exports = mongoose.model('Book', bookSchema);
