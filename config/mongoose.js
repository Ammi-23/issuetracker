//require the library
const mongoose= require('mongoose');
//connect to the database
mongoose.connect('mongodb://127.0.0.1/project_db');
const db = mongoose.connection;

//if error in connecting db
db.on('error', console.error.bind(console, "Error connecting to mongodb"));
//message when successfully connected
db.once('open', function(){
    console.log("Successfully connected to database :: mongodb");
});

module.exports = db;