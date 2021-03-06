const { MongoClient } = require('mongodb');
const assert = require('assert');
let dbConnection;
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'bookmarker';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to mongodb");
  dbConnection = client.db(dbName);  
  // client.close();
});

const getConnection = () => {
  return dbConnection
};

module.exports.getConnection = getConnection;

