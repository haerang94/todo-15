const promisePool = require("../connection.js");
const { todoList } = require("../tableList.js");

function patchTodoList(id, groupTitle) {
  const query = `update ${todoList} set groupTitle='${groupTitle}' where id=${id}`;
  return promisePool.execute(query);
}

module.exports = patchTodoList;
