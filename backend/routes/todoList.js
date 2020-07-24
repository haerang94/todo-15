const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate.js");

const {
  getTodoListCallback,
  patchTodoListsCallback,
  postTodoListCallback,
  deleteTodoListCallback,
} = require("../functions/todoList.js");

router.get("/", getTodoListCallback);
router.post("/", authenticate, postTodoListCallback);
router.patch("/:groupId", authenticate, patchTodoListsCallback);
router.delete("/:groupId", authenticate, deleteTodoListCallback);

module.exports = router;
