const express = require('express');
const app = express();

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
});


// CREATE
// POST /surveys
router.post('/create-books', (req, res, next) => {
  // set owner of new survey to be current user
  const book = req.body

  Survey.create(book)
    // respond to succesful `create` with status 201 and JSON of new "survey"
    .then(book => {
      res.status(201).json({ book: book.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})


module.exports = router;
