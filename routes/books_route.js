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
    //.then(books => {
     // return books.map(book => book.toObject())
    //})
    //.then(books => res.status(200).json({ books: books }))
    //.catch(next)
    .then(books => res.json(books))
    .catch(err => res.status(400).json ('Error' + err));
});

//SHOW GET a book

router.get('/books/:id', (req, res, next) => {
  //requires the id of the resource to find it by id
  //uses mongoose findById
  Book.findById(req.params.id)
  //handles the error message
  //.then(error404)
  //if findById is successful, respond with code 200 OK
  //make it look pretty with json
  .then(book => res.json(book))
  //if an error occours pass it to handler
  .catch(err => res.status(400).json('Error: ' + err))
})

// CREATE
// POST /surveys
router.post('/books', (req, res, next) => {
  // require the entire body of the book schema
  const book = req.body.book
  //create using variable book for the body
  Book.create(book)
    // respond to succesful `create` with status 201 and JSON of new "survey"
    .then(book => {
      res.status(201).json({ book: book.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

//UPDATE
//PATCH to be used with id
// router.patch('/books/:id', blanks, (req, res, next) => {
//
//   Book.findByIdAndUpdate(req.param.id)
//   .then(error404)
//   // .then(book => {
//   //   return book.updateOne(req.body.book)
//   // })
//   .then(() => res.sendStatus(204))
//   .catch(next)
// })

router.patch('/books/:id', (req, res, next) => {
  Book.findByIdAndUpdate(req.params.id, {
    $set: req.body.book
}) .then(error404)
  // .then(book => {
  //   return book.updateOne(req.body.book)
  // })
  .then(() => res.sendStatus(204))
  .catch(next)
})

//DELETE
router.delete('/books/:id', (req, res, next) => {
  Book.findByIdAndRemove(req.params.id)
  .then(error404)
  .then(() => res.sendStatus(204))
  .catch(next)
})
module.exports = router;
