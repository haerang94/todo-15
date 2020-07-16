const promisePool = require('../connection.js');

function getTodoList(){
    const query =  `SELECT idx, title, content, group_id, author FROM TODOLIST ORDER BY group_id, idx;`;
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

