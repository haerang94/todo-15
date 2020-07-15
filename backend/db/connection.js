const mysql = require("mysql2");
const { host, user, password, database } = require("./config/config.js");

const connection = mysql.createConnection({
  host,
  user,
  password,
  database,
});
