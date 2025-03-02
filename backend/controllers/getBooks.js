const db = require('../db/queries')

const getBooks = async (req, res) => {
  const books = await db.getAllBooks()
  console.log(books);
  res.send(books)
}

module.exports = getBooks