const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  count: {
    type: String,
    required: true
  },
  numVotes: Number
})

module.exports = mongoose.model('Rating', ratingSchema)
