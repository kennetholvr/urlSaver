const { MongoClient } = require('mongodb');
const assert = require('assert');
let db;
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'bookmarker';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to mongodb");

  db = client.db(dbName);
  saveLinks({url: "bomb", description: "blows up"});
  client.close();
});

const saveLinks = (link)=>{
  //get the documents collection
  const bookmarks = db.collection('bookmarks');
  //save a new link
  bookmarks.insertOne(link)
}

