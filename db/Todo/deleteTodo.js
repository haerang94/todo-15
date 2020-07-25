const promisePool = require("../connection.js");
const { todo } = require("../tableList.js");
function deleteTodo(id) {
  const query = `DELETE FROM ${todo} WHERE id=${id}`;
  return promisePool.execute(query);
}

module.exports = deleteTodo;
