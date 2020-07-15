const express = require('express');
const router = express.Router();

const getTodoCallback = require('../functions/todoCallback.js');
// api 서버

router.get('/', getTodoCallback);



module.exports = router;
