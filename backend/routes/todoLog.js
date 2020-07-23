const express = require("express");
const router = express.Router();

const {
  validateTodoLog,
  postLogsCallback,
  getLogsCallback,
} = require("../functions/todoLog.js");
// api 서버

router.post("/", validateTodoLog, postLogsCallback);
router.get("/", getLogsCallback);
module.exports = router;
