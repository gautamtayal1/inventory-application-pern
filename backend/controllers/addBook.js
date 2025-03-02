const pool = require("../db/pool")
const { insertBook } = require("../db/queries")

const addBooks = async(req, res) => {
  try{
    const { name, author, stock, category_id } = req.body
    await insertBook( name, author, stock, category_id )
    console.log("book inserted")
  } catch (err) {
    console.log(err.message)
    res.status(500).send("error adding the book")
  }
}

module.exports= addBooks