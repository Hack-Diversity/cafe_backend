//after installing express we need to require it ot use it
const express = require('express');
// const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./mongo/database');
// const bodyParser = require('body-parser');


// import routes
const booksRoute = require('./routes/books_route');
//import middleware files to handle errors
const errorMessages = require('./lib/errors');

//connect to mongoose database
mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express();

app.use(cors());

// Create a port
const port = process.env.PORT || 8080;

//assigns to variable app, app Init

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}))
// app.use(express.urlencoded({

//API route
app.use('/books', booksRoute);

app.use(errorMessages);


app.listen(port, () => {
  console.log("Port Connected to: " + port)
});

module.exports = app
