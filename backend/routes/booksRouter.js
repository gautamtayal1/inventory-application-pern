const { Router } = require('express')
const booksRouter = Router()
const getBooks = require('../controllers/getBooks')
const addBooks = require('../controllers/addBook')
const removeBook = require('../controllers/removeBook')

booksRouter.get("/", getBooks)
booksRouter.post("/", addBooks)
booksRouter.post("/delete", removeBook)

module.exports = booksRouter