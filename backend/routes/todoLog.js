const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate.js");
const {
  validateTodoLog,
  postLogsCallback,
  getLogsCallback,
} = require("../functions/todoLog.js");
// api 서버

router.post("/", authenticate, validateTodoLog, postLogsCallback);
router.get("/", getLogsCallback);
module.exports = router;
