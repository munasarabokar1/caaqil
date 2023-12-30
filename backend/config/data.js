require("dotenv").config();

const mysql = require("mysql");

const connection = mysql.createPool({
  connectionLimit: 100, //important
  host: "localhost",
  database: "caaqil",
  user: "root",
  password: "",
  debug: false,
  multipleStatements: true,
});
console.log("working database");

module.exports = connection;
