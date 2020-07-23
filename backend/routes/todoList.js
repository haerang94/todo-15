const express = require("express");
const router = express.Router();

const {
  getTodoListCallback,
  patchTodoListsCallback,
  postTodoListCallback,
} = require("../functions/todoList.js");
router.get("/", getTodoListCallback);
router.post("/", postTodoListCallback);
router.patch("/:groupId", patchTodoListsCallback);

module.exports = router;
