const assert = require('assert');
const Book = require('../models/book');

describe('Deleting records', function(){
	var book;
	beforeEach(function(done){
		book = new Book({
			title: 'C# Programming'
		});
		book.save().then(function(){
			done();
		});
	});

	it('Deletes a record from the database', function(done){
		Book.findOneAndRemove({title: 'C# Programming'}).then(function(){
			Book.findOne({title: 'C# Programming'}).then(function(result){
				assert(result === null);
				done();
			});
		});
	});
});
