const promisePool = require("../connection.js");
import { todo } from "../tableList.js";

function idxUpdateTodos({ groupId, idx }) {
  const query = `UPDATE ${todo} SET idx=idx+1 WHERE groupId='${groupId}' and idx>=${idx}`;
  return promisePool.execute(query);
}

function idxUpdate({ groupId, idx, id }) {
  const query = `UPDATE ${todo} SET idx=${idx}, groupId='${groupId}' WHERE id=${id}`;
  return promisePool.execute(query);
}

module.exports = { idxUpdate, idxUpdateTodos };
