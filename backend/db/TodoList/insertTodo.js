const promisePool = require('../connection.js');

function insertTodo({title, content, status, author}){
    const query =  `INSERT INTO TODOLIST VALUES(NULL, '${title}', '${content}', '${status}', '${author}');`;
    return promisePool.execute(query);
}

module.exports = insertTodo;

// test

// const input = {
//     title : "디비를 배우자",
//     content : "SQL문을 배워보자", 
//     author : "cc6656",
//     status : 1,
// }
// insertTodo(input)
// .then(res => {
//     console.log(res);
// })
// .catch(e => {
//     console.log(e);
// })