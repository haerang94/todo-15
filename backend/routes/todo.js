const express = require("express");
const router = express.Router();

const {
  getTodoCallback,
  postTodoCallback,
  validateTodo,
  deleteTodoCallback,
  patchTodoCallback,
  distinctColumnsCallback,
} = require("../functions/todo.js");
// api 서버

router.get("/", getTodoCallback);
router.post("/", validateTodo, postTodoCallback);
router.delete("/:id", deleteTodoCallback);
router.patch("/:id", patchTodoCallback);

module.exports = router;
