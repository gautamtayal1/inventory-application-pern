const { Router } = require('express')
const booksRouter = Router()
const getBooks = require('../controllers/getBooks')

booksRouter.get("/", getBooks)

module.exports = booksRouter