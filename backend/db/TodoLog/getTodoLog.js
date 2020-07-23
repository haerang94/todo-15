const promisePool = require("../connection.js");
const { todoLog } = require("../tableList.js");
function getTodoLog() {
  const query = `SELECT * FROM ${todoLog} ORDER BY id;`;
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
