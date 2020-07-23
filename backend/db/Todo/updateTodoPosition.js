const promisePool = require("../connection.js");

function idxUpdateTodos({ groupId, idx }) {
  const query = `UPDATE TODOLIST SET idx=idx+1 WHERE groupId='${groupId}' and idx>=${idx}`;
  return promisePool.execute(query);
}

function idxUpdate({ groupId, idx, id, groupTitle }) {
  const query = `UPDATE TODOLIST SET idx=${idx}, groupId='${groupId}', groupTitle='${groupTitle}' WHERE id=${id}`;
  return promisePool.execute(query);
}

module.exports = { idxUpdate, idxUpdateTodos };
