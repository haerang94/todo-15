const promisePool = require("../connection.js");
const { todo } = require("../tableList.js");

function updateTodo({ title, content, author, id }) {
  const query = `UPDATE ${todo} SET title='${title}', content='${content}', author='${author}' WHERE id=${id}`;
  return promisePool.execute(query);
}

module.exports = updateTodo;
