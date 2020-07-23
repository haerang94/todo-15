const express = require("express");
const router = express.Router();

const {
  getTodoCallback,
  postTodoCallback,
  validateTodo,
  deleteTodoCallback,
  patchTodoCallback,
  patchMoveTodoCallback,
} = require("../functions/todo.js");
// api 서버

router.get("/", getTodoCallback);
router.post("/", validateTodo, postTodoCallback);
router.delete("/:id", deleteTodoCallback);
router.patch("/:id", patchTodoCallback);

router.patch("/move/:id", patchMoveTodoCallback);

module.exports = router;
