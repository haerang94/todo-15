const getTodoDB = require('../db/TodoList/getTodoList.js');
const insertTodo = require('../db/TodoList/insertTodo.js');

const statusCode = require('../utils/statusCode.js');
const errorMessage = require('../utils/errorMessage.js');

async function getTodoCallback(req, res){
    try{
        const result = await getTodoDB();
        const todoList = result[0];
        return res.header("Access-Control-Allow-Origin", "http://localhost:9000").status(statusCode.OK).json(todoList);
    }catch(e){
        return res.status(statusCode.DB_ERROR).send(errorMessage.DB_ERROR);
    }
}

function validateTodo(req, res, next){
    const todo = req.body;

    let check = true;

    if(!todo.title) check = false;
    if(!todo.groupId) check = false;
    if(!todo.author) check = false;

    if(!check) return res.status(statusCode.BAD_REQUEST).send(errorMessage.BAD_REQUEST);
    
    next();
}

async function postTodoCallback(req, res){
    try{
        const todo = req.body;
        const result = await insertTodo(todo);
        return res.sendStatus(statusCode.OK);
    }catch(e){
        console.log(e);
        return res.status(statusCode.DB_ERROR).send(errorMessage.DB_ERROR);
    }

}



module.exports = {getTodoCallback, postTodoCallback, validateTodo};

