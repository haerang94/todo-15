const promisePool = require("../connection.js");
const { todoLog } = require("../tableList.js");

function insertLog({
  username,
  actionType,
  time,
  previousContent,
  presentContent,
  previousColumn,
  presentColumn,
}) {
  const query = `INSERT INTO ${todoLog} VALUES(NULL, '${username}', '${actionType}', '${time}', '${previousContent}', '${presentContent}', '${previousColumn}', '${presentColumn}')`;
  return promisePool.execute(query);
}

module.exports = insertLog;
