const promisePool = require("../connection.js");

function deleteTodo(id) {
  const query = `DELETE FROM TODOLIST WHERE id=${id}`;
  return promisePool.execute(query);
}

module.exports = deleteTodo;

// test

// deleteTodo(24)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
