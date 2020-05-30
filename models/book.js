const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model
const BookSchema = new Schema({
    title: String,
	genre: String,
    pages: Number
});

//create new book in 'book' collection
const Book = mongoose.model('book', BookSchema);
//export it to use it in other project files
module.exports = Book;

//var myBook = new Book({}); //create new object