const promisePool = require("../connection.js");

function distinctColumns() {
  const query = `select distinct groupId from TODOLIST order by groupId`;
  return promisePool.execute(query);
}

module.exports = distinctColumns;

// test

// deleteTodo(24)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
