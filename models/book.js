//Required packages and files
const mongoose = require('mongoose');
const Rating = require('./rating');
//uses the file rating to pass it inside of book schema
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
  rating: [ ratingSchema ] //should be an array
}, {
  timestamps: true
})
//makes file available to be used
//Pseudo and file code by PA
module.exports = mongoose.model('Book', bookSchema);
