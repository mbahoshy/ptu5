var mongoose = require('mongoose');



var MONGOHQ_URL = 'mongodb://mbahoshy:07maryJ68@oceanic.mongohq.com:10037/pm_project';
mongoose.connect(MONGOHQ_URL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log('successfully connected to database!');
});

