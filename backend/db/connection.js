const mysql = require("mysql2");
const { host, port, user, password, database } = require("./config/config.js");

const pool = mysql.createPool({
  host,
  port,
  user,
  password,
  database,
});


