const promisePool = require("../connection.js");

function getColumns() {
  const query = `select distinct groupId, groupTitle from TODOLIST order by groupId`;
  return promisePool.execute(query);
}

module.exports = getColumns;

// test

// deleteTodo(24)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
