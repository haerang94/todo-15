const express = require("express");
const router = express.Router();

const {
  getTodoListCallback,
  patchTodoListsCallback,
} = require("../functions/todoList.js");
router.get("/", getTodoListCallback);
router.patch("/:groupId", patchTodoListsCallback);

module.exports = router;
