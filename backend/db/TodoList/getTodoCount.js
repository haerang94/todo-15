const promisePool = require("../connection.js");

function getTodoCount() {
  const query = `SELECT COUNT(*) as cnt FROM TODOLIST GROUP BY groupId;`;
  return promisePool.execute(query);
}

module.exports = getTodoCount;

// test
