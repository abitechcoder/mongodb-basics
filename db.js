var mongo = require('mongodb');
const username = "abitechcoder";
// Creating a MongoClient object
var MongoClient = require('mongodb').MongoClient;
// creating url with the correct ip address and the name of the database you want to create
var url = `mongodb://localhost:27017/${username}`;

// creating the database and connecting to it
MongoClient.connect(url, function(err, db){
    if (err) throw err;
    console.log(`Database created! by ${username}`);
    db.close();
});