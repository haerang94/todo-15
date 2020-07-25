const promisePool = require("../connection.js");
const { todoList } = require("../tableList.js");
function insertTodoList({ groupId, groupTitle }) {
  const query = `insert into ${todoList} values('${groupId}','${groupTitle}')`;
  return promisePool.execute(query);
}

module.exports = insertTodoList;
