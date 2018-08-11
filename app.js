const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log('Connected to mongodb server');
    
});

mongoose.connect('mongodb://localhost/mongodb_tutorial');

const Book = require('./models/book');

const port = process.env.PORT || 8080;

const router = require('./routes/index')(app, Book);

const server = app.listen(port, () => {
    console.log('Express server has started on port '+port);
});