const getTodoDB = require('../db/TodoList/getTodoList.js');
const statusCode = require('../utils/statusCode.js');
const errorMessage = require('../utils/errorMessage.js');

async function getTodoCallback(req, res){
    try{
        const result = await getTodoDB();
        const todoList = result[0];
        return res.status(statusCode.OK).json(todoList);
    }catch(e){
        return res.status(statusCode.DB_ERROR).send(errorMessage.DB_ERROR);
    }
}

module.exports = getTodoCallback;

