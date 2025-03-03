const db = require("../db/queries")

const removeBook = async(req, res) => {
  try{
    const {id} = req.body
    await db.deleteBook(id)
    console.log(id)
    res.send("book deleted")
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = removeBook