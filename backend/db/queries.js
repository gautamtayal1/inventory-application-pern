const pool = require("./pool")

async function getAllBooks() {
  const {rows} = await pool.query("SELECT * FROM books")
  return rows
}

async function insertBook(name, author, stock, category_id) {
  await pool.query(
    "INSERT INTO books (name, author, stock, category_id) VALUES ($1, $2, $3, $4)",
    [name, author, stock, category_id])
}

async function deleteBook(id) {
  await pool.query(
    "DELETE FROM books WHERE id = $1", [id]
  );
}

module.exports = {
  getAllBooks,
  insertBook,
  deleteBook
}