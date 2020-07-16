const promisePool = require("../connection.js");

function insertTodo({ idx, title, content, groupId, author }) {
  const query = `INSERT INTO TODOLIST VALUES(NULL, ${idx}, '${title}', '${content}', '${groupId}', '${author}');`;
  return promisePool.execute(query);
}

module.exports = insertTodo;

// test

// const input = {
//   title: "디비를 배우자",
//   content: "SQL문을 배워보자",
//   author: "cc6656",
//   groupId: "todo-3",
//   idx: 12,
// };
// insertTodo(input)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
