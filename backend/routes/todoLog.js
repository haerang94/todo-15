const express = require("express");
const router = express.Router();

const {
  validateTodoLog,
  postLogsCallback,
} = require("../functions/todoLog.js");
// api 서버

router.post("/", validateTodoLog, postLogsCallback);

module.exports = router;
