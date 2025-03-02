const { Pool } = require("pg")

module.exports = new Pool({
  host: "localhost",
  user: "apple",
  database: "books",
  password: "Tayal@098",
  port: 5432 
})