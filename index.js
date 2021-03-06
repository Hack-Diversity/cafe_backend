//after installing express we need to require it ot use it
//calls express.js
const express = require('express');
// const path = require('path');
//calls mongoose package
const mongoose = require('mongoose');
//calls cors package
const cors = require('cors');
//calls the database.js file
const dbConfig = require('./config/database');
//calls body-parser package
const bodyParser = require('body-parser');
//PA

// import routes
const booksRoute = require('./routes/books_route');
const adminRoute = require('./routes/admin_route');
//import middleware files to handle errors
const errorMessages = require('./lib/errors');

//connect to mongoose by using database.js
mongoose.connect(dbConfig)

// mongoose.connect("mongodb://localhost:27017/books", {useCreateIndex})
// sets express to a variable called app
const app = express();
//create ports to be used, while developing, access the port at
//localhost:4741
const serverPort = 4741;
const clientPort = 7165; 

//app.use(cors({ origin: "https://hack-diversity.github.io" || `http://localhost:${clientDevPort}` }));
app.use(cors({ origin: "http://localhost:8000" || `http://localhost:${clientDevPort}` }));

// Create a port assgining the port 4741
const port = process.env.PORT || serverPort;

//assigns to variable app, app Init
//express uses the body-parser packahe the encode the url
app.use(bodyParser.urlencoded({
  extended: true
}));
//express uses the body-parser package and turns into json
app.use(bodyParser.json());

//express uses method GET to set a success message on main page
//this is a test, can and should be removed in the future
app.get('/', (req, res) => {
  res.json({"message": "Success"})
})
//API route - calls and uses file routes/book_route
app.use(booksRoute);
app.use(adminRoute);
//calls and uses file lib/errors.js
app.use(errorMessages);

//express listens to the value of variabble port and prints
//to the CLI server a success message
app.listen(port, () => {
  console.log("Port Connected to: " + port)
});
//exports allows the use of this file
//Pseudo and file code by PA
module.exports = app;
