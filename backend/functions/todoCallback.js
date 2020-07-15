const getTodoDB = require('../db/TodoList/getTodoList.js');
const insertTodo = require('../db/TodoList/insertTodo.js');

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

async function postTodoCallback(req, res){
    const todo = req.body;

    if(!validateTodo(todo)) return res.status(statusCode.BAD_REQUEST).send(errorMessage.BAD_REQUEST);

    try{
        const result = await insertTodo(todo);
        return res.sendStatus(statusCode.OK);
    }catch(e){
        console.log(e);
        return res.status(statusCode.DB_ERROR).send(errorMessage.DB_ERROR);
    }

}

function validateTodo(todo){
    let check = true;

    if(!todo.title) check = false;
    if(!todo.status) check = false;
    if(!todo.author) check = false;

    return check;
}

module.exports = {getTodoCallback, postTodoCallback};

