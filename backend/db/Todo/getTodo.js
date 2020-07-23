const promisePool = require("../connection.js");
const { todo } = require("../tableList.js");
function getTodo() {
  const query = `SELECT * FROM ${todo} ORDER BY groupId, idx;`;
  return promisePool.execute(query);
}

module.exports = getTodo;

// test

// getTodoList()
// .then(res => {
//     console.log(res[0]);
// })
// .catch(e => {
//     console.log(e);
// })
