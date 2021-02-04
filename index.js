//after installing express we need to require it ot use it
const express = require('express');
// const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./config/database');
const bodyParser = require('body-parser');


// import routes
const booksRoute = require('./routes/books_route');
//import middleware files to handle errors
const errorMessages = require('./lib/errors');

//connect to mongoose database
mongoose.connect(dbConfig);
// mongoose.connect("mongodb://localhost:27017/books", {useCreateIndex})

const app = express();

app.use(cors());

// Create a port
const port = process.env.PORT || 27017;

//assigns to variable app, app Init

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// app.use(express.urlencoded({
app.get('/', (req, res) => {
  res.json({"message": "Test"})
})
//API route
app.use('/books', booksRoute);

app.use(errorMessages);


app.listen(port, () => {
  console.log("Port Connected to: " + port)
});

module.exports = app;
