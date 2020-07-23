const express = require("express");
const path = require("path");
const cors = require("cors");

const todoRouter = require("./routes/todo.js");
const todoListRouter = require("./routes/todoList.js");
const todoLogRouter = require("./routes/todoLog.js");
const allowOrigin = "http://localhost:9000";
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors({ origin: allowOrigin }));

app.use("/api/todos", todoRouter);
app.use("/api/todolist", todoListRouter);
app.use("/api/todo-logs", todoLogRouter);
app.listen(3000, () => {
  console.log("running in http://localhost:3000");
});
