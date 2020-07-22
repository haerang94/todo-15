const promisePool = require("../connection.js");

function getTodoList() {
  const query = `SELECT * FROM TODOLIST ORDER BY groupId, idx;`;
  return promisePool.execute(query);
}

module.exports = getTodoList;

// test

// getTodoList()
// .then(res => {
//     console.log(res[0]);
// })
// .catch(e => {
//     console.log(e);
// })
