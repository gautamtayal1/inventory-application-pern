const db = require('../db/queries')

const getBooks = async (req, res) => {
  try{
    const books = await db.getAllBooks()
    console.log(books);
    res.send(books)
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = getBooks