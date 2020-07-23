const promisePool = require("../connection.js");
import { todo } from "../tableList.js";

function insertTodo({ idx, title, content, groupId, author }) {
  const query = `INSERT INTO ${todo} VALUES(NULL, ${idx}, '${title}', '${content}', '${groupId}', '${author}');`;
  return promisePool.execute(query);
}

module.exports = insertTodo;

// test

// const input = {
//   title: "디비를 배우자",
//   content:
//     "adfadfadfadsfadfadfasdfadsfadfadfafdsfasdfasdfadfasdfadfgafdkvakjldvclanslkdjhaiou;shdflahsdljkfhakjdhasdfakjsdhlfjkahdjfhasdf",
//   author: "cc6656",
//   groupId: "todo-3",
//   idx: 13,
// };
// insertTodo(input)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
