const assert = require('assert');
const Book = require('../models/book');

describe('Updating records', function(){
	var book;
	beforeEach(function(done){
		book = new Book({
			title: 'C# Programming',
			pages: 250
		});
		book.save().then(function(){
			done();
		});
	});

	it('Updates a record in the database', function(done){
		Book.findOneAndUpdate({title: 'C# Programming'}, {title: 'Java Programming'}).then(function(){
			Book.findOne({_id: book._id}).then(function(result){
				assert(result.title === 'Java Programming');
				done();
			});
		});
	});

	it('Adds 10 pages to every record', function(done){
		Book.updateOne({},{$inc:{pages: 10}}).then(function(){
			Book.findOne({title: 'C# Programming'}).then(function(record){
				assert(record.pages === 260);
				done();
			});
		});
	});
});