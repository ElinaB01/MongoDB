const mongoose = require('mongoose');

//ES6 Promises library
mongoose.Promise = global.Promise;

//connect to db before tests run
before(function(done){ //any code within before() runs before all tests
    //connect to mongodb; creates database if it doesn't exist
    mongoose.connect('mongodb://localhost/testdb');
    mongoose.connection.once('open', function(){
        console.log('Connection has been made!');
        done();
    }).on('error', function(error){ //on == executes every time
        console.log('Connection error: ', error);
    });
});

//drop (delete) the collection before each test
beforeEach(function(done){
    mongoose.connection.collections.books.drop(function(){
        done();
    });
});
