const assert = require('assert');

const interns = function(db, callback){
  //Get the documents collection
  const collection = db.collection('myMovies');
  //Insert some documents
  collection.insertMany(
    [
      {
        movie: "The Banker",
        year: 2020, 
        rating: 8
      },
      {
        movie: "Bad Boys",
        year: 2020, 
        rating: 7
      },
      {
        movie: "The Hunt",
        year: 2020, 
        rating: 7
      },
      {
        movie: "Bloodshot",
        year: 2020, 
        rating: 7.5
      },
      {
        movie: "First Cow",
        year: 2020, 
        rating: 6.5
      },
    ], function(err, results){
        assert.equal(err, null);
        assert.equal(results.insertedCount, results.result.n)
        console.log(results.ops)
        callback(results);
      }
  );
};

module.exports = interns;