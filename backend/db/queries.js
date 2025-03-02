const pool = require("./pool")

async function getAllBooks() {
  const {rows} = await pool.query("SELECT * FROM books")
  return rows
}

async function insertBook({author, book, stock}) {
  await pool.query("INSERT INTO books (author, book, stock) VALUES ($1, $2, $3)", [author, book, stock])
}

module.exports = {
  getAllBooks,
  insertBook
}