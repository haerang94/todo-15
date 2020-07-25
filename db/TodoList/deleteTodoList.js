const promisePool = require("../connection.js");
const { todoList } = require("../tableList.js");

function deleteTodoList(groupId) {
  const query = `DELETE FROM ${todoList} WHERE groupId='${groupId}'`;
  return promisePool.execute(query);
}

module.exports = deleteTodoList;
