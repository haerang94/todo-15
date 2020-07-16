const express = require("express");
const router = express.Router();

const {
  getTodoCallback,
  getTodoCountCallback,
  postTodoCallback,
  validateTodo,
  deleteTodoCallback,
} = require("../functions/todo.js");
// api 서버

router.get("/", getTodoCallback);
router.post("/", validateTodo, postTodoCallback);
router.delete("/:id", deleteTodoCallback);

router.get("/count", getTodoCountCallback);

module.exports = router;
