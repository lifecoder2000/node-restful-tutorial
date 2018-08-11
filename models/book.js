const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title : {type : String},
    author : {type : String},
    published_date : {type : Date, default : Date.now()}
});

module.exports = mongoose.model('book', bookSchema);