const mysql = require("mysql2");
const { host, port, user, password, database } = require("./config/config.js");
const promisePool = mysql.createPool({
  host,
  port,
  user,
  password,
  database,
}).promise();



module.exports =  promisePool;

