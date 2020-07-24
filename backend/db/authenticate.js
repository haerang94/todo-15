const promisePool = require("./connection.js");

function authenticate(id) {
  const query = `SELECT authorization from USER where id=${id}`;
  return promisePool.query(query);
}

module.exports = authenticate;
