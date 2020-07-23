const promisePool = require("../connection.js");
import { todoList } from "../tableList.js";

function patchTodoList(groupId, groupTitle) {
  const query = `update ${todoList} set groupTitle='${groupTitle}' where groupId='todoList-${groupId}'`;
  return promisePool.execute(query);
}

module.exports = patchTodoList;
