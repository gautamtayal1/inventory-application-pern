const express = require("express")
const booksRouter = require("./routes/booksRouter")
const app = express()
const cors = require('cors')

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use(express.json())
app.use("/", booksRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
})