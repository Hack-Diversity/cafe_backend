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
  publication_year: {
    type: String
  },
  isbn: {
    type: Number,
    required: true
  },
  publisher: {
    type: String
  },
  copies: {
    type: Number,
    required: true
  },
  available: {
    type: Number,
    required: true
  },
  rating: [ ratingSchema ]
}, {
  timestamps: true
})

module.exports = mongoose.model('Book', bookSchema);
