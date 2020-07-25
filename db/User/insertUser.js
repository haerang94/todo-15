const promisePool = require("../connection.js");

function insertUser({ username, authorziation }) {
  const query = `INSERT INTO USER VALUES(NULL, '${username}', ${authorziation});`;
  return promisePool.query(query);
}

module.exports = insertUser;
