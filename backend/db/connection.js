const mysql = require("mysql2");
const { host, port, user, password, database } = require("./config/config.js");
const promisePool = mysql.createPool({
  host,
  port,
  user,
  password,
  database,
}).promise();

// const {createTodoListTable} = require('./query/createTable');
// promisePool.execute(createTodoListTable);


module.exports =  promisePool;

