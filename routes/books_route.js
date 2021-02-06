//using express to create routes
const express = require('express');
//call book schema file
const Book = require('../models/book');
//call custom errors file - PA
const errors = require('../lib/custom_errors');
// call function handle404 from custom_errors - PA
const error404 = errors.handle404;
//create express router and assign to a variable - PA
const router = express.Router();

//this page will allow CRUD (in this case READ ONLY) for all
//users of the page, a separate page (route) will be created
//for the administrator - PA

//INDEX - GET all books
//calls extension /books and passes params req, res and next -PA
router.get('/books', (req, res, next) => {
  //uses mongoose find() to find all entries on the database
  Book.find()
  //if successful, map the entries and turn into object
    .then(books => {
      return books.map(book => book.toObject())
    })
    //once an object return success code 200 and display
    //as json
    .then(books => res.status(200).json({ books: books }))
    //if error next
    .catch(next)
    // -PA
});

//SHOW - GET a book by id
router.get('/books/:id', (req, res, next) => {
  //requires the id of the resource to find it by id
  //uses mongoose findById
  Book.findById(req.params.id)
  //handles the error message
  .then(error404)
  //if findById is successful, respond with code 200 OK
  //make it look pretty with json
  .then(book => res.status(200).json({ book: book.toObject()}))
  //if an error occours pass it to handler
  .catch(next)
  // -PA
})

// exports this page
//Pseudo and file code by PA
module.exports = router;
