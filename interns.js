const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// connection url
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "startng_internship";

// Create a new MongoClient
const client = new MongoClient(url, {useUnifiedTopology: true, useNewUrlParser: true});

// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err)
  console.log("Connected Successfully to server")
  const db = client.db(dbName);
  //var dbObject = db.db("startng_internship");
  db.createCollection("interns", function(err, res) {
    if (err) throw err;
    console.log("Interns collection created!");
    client.close();
  });
});