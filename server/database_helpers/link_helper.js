const db = require('./index.js');

const saveLinks = (link) => {
  //get the documents collection
  const bookmarks = db.getConnection().collection('bookmarks');
  //save a new link
  bookmarks.insertOne(link)
  
}

module.exports.saveLinks = saveLinks;