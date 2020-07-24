const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authenticate.js");
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
router.post("/", authenticate, validateTodo, postTodoCallback);
router.delete("/:id", authenticate, deleteTodoCallback);
router.patch("/:id", authenticate, patchTodoCallback);

router.patch("/move/:id", authenticate, patchMoveTodoCallback);

module.exports = router;
