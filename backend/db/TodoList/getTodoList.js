const promisePool = require('../connection.js');

function getTodoList(){
    const query =  `SELECT title, content, status, author FROM TODOLIST`;
    return promisePool.execute(query);
}

module.exports = getTodoList;

// test

// getTodoList()
// .then(res => {
//     console.log(res[0]);
// })
// .catch(e => {
//     console.log(e);
// })