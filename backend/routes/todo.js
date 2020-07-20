const express = require("express");
const router = express.Router();

const {
  getTodoCallback,
  getTodoCountCallback,
  postTodoCallback,
  validateTodo,
  deleteTodoCallback,
  distinctColumnsCallback,
} = require("../functions/todo.js");
// api 서버

router.get("/", getTodoCallback);
router.post("/", validateTodo, postTodoCallback);
router.delete("/:id", deleteTodoCallback);

router.get("/count", getTodoCountCallback);
router.get("/columns", distinctColumnsCallback);

module.exports = router;
