'use strict'
//db.js
require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGO_URI;

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ');
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });

module.exports = url;
