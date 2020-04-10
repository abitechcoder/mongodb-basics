var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/startng_internship";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbObject = db.db("startng_internship");
  dbObject.createCollection("interns", function(err, res) {
    if (err) throw err;
    console.log("Interns collection created!");
    db.close();
  });
});