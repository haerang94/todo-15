const express = require('express');
const router = express.Router();

const {getTodoCallback, postTodoCallback} = require('../functions/todoCallback.js');
// api 서버

router.get('/', getTodoCallback);
router.post('/', postTodoCallback);

module.exports = router;
