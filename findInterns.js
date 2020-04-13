const assert = require('assert');

const findInterns = function(db, callback){
    //Get the documents collection
    const collection = db.collection('myMovies');

    // Find first document in the collection
    collection.findOne({}, function(err, doc){
        assert.equal(err, null);
        console.log(`\n Found the first document in the collection:`)
        console.log(doc);
    });

    // Find all movies with a rating of 7
    collection.find({"rating": 7}).toArray(function(err, docs){
        assert.equal(err, null);
        console.log(`\n Found all movies with a rating of 7:`);
        console.log(docs);
        callback(docs);
    });

    // Using Projection object to return only movie titles
    collection.find({}, { projection: { _id: 0, movie: 1 } }).toArray(function(err, docs){
        assert.equal(err, null);
        console.log(`\n Found all movies title in the collection:`);
        console.log(docs);
        callback(docs);
    });
}

module.exports = findInterns;