const promisePool = require("../connection.js");
const { todoList } = require("../tableList.js");

function patchTodoList(groupId, groupTitle) {
  const query = `update ${todoList} set groupTitle='${groupTitle}' where groupId='${groupId}'`;
  return promisePool.execute(query);
}

module.exports = patchTodoList;
