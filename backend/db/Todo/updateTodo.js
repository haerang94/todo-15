const promisePool = require("../connection.js");

function updateTodo({ title, content, author, id }) {
  const query = `UPDATE TODOLIST SET title='${title}', content='${content}', author='${author}' WHERE id=${id}`;
  return promisePool.execute(query);
}

module.exports = updateTodo;
