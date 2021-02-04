const express = require('express');

const Book = require('../models/book');

const errors = require('../lib/custom_errors');

const error404 = errors.handle404;

const router = express.Router();

router.get('/books', (req, res, next) => {
  Book.find()
    .then(books => {
      return books.map(book => book.toObject())
    })
    .then(books => res.status(200).json({ books: books }))
    .catch(next)
})

module.exports = router;
