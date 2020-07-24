const promisePool = require("./connection.js");

function authenticate(id) {
  const query = `SELECT authorization from USER where id=${id}`;
  return promisePool.query(query);
}

module.exports = authenticate;

// test

// insertUser("cc6656", false)
// .then(res => {
//     console.log(res);
// })
// .catch(e => {
//     console.log(e);
// })
