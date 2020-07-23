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

// test

// const input = {
//   username: "cc6656",
//   actionType: "added",
//   time: `${new Date()}`,
//   previousContent: "그전 내용",
//   presentContent: "현재 내용",
//   previousColumn: "그전 칼럼",
//   presentColumn: "현재 칼럼",
// };

// insertLog(input)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
