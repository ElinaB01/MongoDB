const assert = require('assert');
const Book = require('../models/book');

//describe tests
describe('Finding records', function(){
	var book;
	//add a book to the db before each test
	beforeEach(function(done){
		book = new Book({
			title: 'C# Programming'
		});
		book.save().then(function(){
			done();
		});
	});

	//create tests
	it('Finds a record by title', function(done){
		Book.findOne({title: 'C# Programming'}).then(function(result){
			assert(result.title === 'C# Programming');
			done();
		});
	});

	it('Finds a record by ID', function(done){
		Book.findOne({_id: book._id}).then(function(result){
			assert(result._id.toString() === book._id.toString());
			done();
		});
	});
});
