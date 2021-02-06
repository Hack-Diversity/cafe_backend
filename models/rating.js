//calls mongoose to create schema
const mongoose = require('mongoose')
//rating schema - PA
const ratingSchema = new mongoose.Schema({
  count: {
    type: String,
    required: true
  },
  numVotes: Number
})
//Pseudo and file code by PA
module.exports = mongoose.model('Rating', ratingSchema)
