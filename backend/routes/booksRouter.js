const { Router } = require('express')
const booksRouter = Router()
const getBooks = require('../controllers/getBooks')
const addBooks = require('../controllers/addBook')

booksRouter.get("/", getBooks)
booksRouter.post("/", addBooks)

module.exports = booksRouter