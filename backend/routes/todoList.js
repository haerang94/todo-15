const express = require("express");
const router = express.Router();

const {
  getTodoListCallback,
  patchTodoListsCallback,
  postTodoListCallback,
  deleteTodoListCallback,
} = require("../functions/todoList.js");

router.get("/", getTodoListCallback);
router.post("/", postTodoListCallback);
router.patch("/:groupId", patchTodoListsCallback);
router.delete("/:groupId", deleteTodoListCallback);

module.exports = router;
