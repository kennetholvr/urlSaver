const { getConnection } = require('./index.js');

const saveLinks = (link) => {
  //get the documents collection
  const bookmarks = getConnection().collection('bookmarks');
  //save a new link
  bookmarks.insertOne(link)
}

const getLinks = (callback) => {
  //get the documents collection
  const bookmarks = getConnection().collection('bookmarks');
  //save a new link
  bookmarks.find({}).toArray(function (err, links) {
    if(err){
      console.error(err)
    }
    callback(err, links);
  });
  // return bookmarks.find({})
}

module.exports.getLinks = getLinks
module.exports.saveLinks = saveLinks;