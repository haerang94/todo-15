const promisePool = require("../connection.js");

function getTodoLog() {
  const query = `SELECT * FROM LOG ORDER BY id;`;
  return promisePool.execute(query);
}

module.exports = getTodoLog;

// test

// getTodoList()
// .then(res => {
//     console.log(res[0]);
// })
// .catch(e => {
//     console.log(e);
// })
