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
mongoose.connect(dbConfig)

// mongoose.connect("mongodb://localhost:27017/books", {useCreateIndex})

const app = express();

const serverPort = 4741;
const clientPort = 7165;

//app.use(cors({ origin: "https://hack-diversity.github.io" || `http://localhost:${clientDevPort}` }));
app.use(cors({ origin: "http://localhost:8000" || `http://localhost:${clientDevPort}` }));

// Create a port
const port = process.env.PORT || serverPort;

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
app.use(booksRoute);

app.use(errorMessages);


app.listen(port, () => {
  console.log("Port Connected to: " + port)
});

module.exports = app;
