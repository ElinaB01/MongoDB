//const mocha = require('mocha');
//const assert = require('assert');
const assert = require('assert');
const Book = require('../models/book'); //js file in models folder

////describe tests
//describe('some demo tests', function(){
//	//create tests
//	it('adds two numbers together', function(){
//		//what we want to expect; test passes
//		assert(2 + 3 === 5);
//	});
//});

describe('Saving records', function(){
	it('Saves a record to the database', function(done){
		var book = new Book({
		title: 'C# Programming',
		genre: 'Monograph'
    });
	
	//wait for saving process to finish before proceeding
    book.save().then(function(){
			//if false, it's been saved to the database
			assert(!book.isNew);
			done();
		});
	});
});
