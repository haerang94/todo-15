const express = require('express');
const router = express.Router();

const {getTodoCallback, postTodoCallback, validateTodo} = require('../functions/todo.js');
// api 서버

router.get('/', getTodoCallback);
router.post('/', validateTodo, postTodoCallback);



module.exports = router;
