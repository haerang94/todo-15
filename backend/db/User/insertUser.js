const promisePool = require("../connection.js");

function insertUser({ username, authorziation }) {
  const query = `INSERT INTO USER VALUES(NULL, '${username}', ${authorziation});`;
  return promisePool.query(query);
}

module.exports = insertUser;

// test

// insertUser("cc6656", false)
// .then(res => {
//     console.log(res);
// })
// .catch(e => {
//     console.log(e);
// })
