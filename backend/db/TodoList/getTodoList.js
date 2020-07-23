const promisePool = require("../connection.js");
const { todoList } = require("../tableList.js");
function getTodoList() {
  const query = `select * from ${todoList} order by id`;
  return promisePool.execute(query);
}

module.exports = getTodoList;

// test

// deleteTodo(24)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
