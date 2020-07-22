const express = require("express");
const path = require("path");
const cors = require("cors");

const todoRouter = require("./routes/todo.js");
const columnRouter = require("./routes/column.js");
// const userRouter = require("./routes/user.js");

const allowOrigin = "http://localhost:9000";
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors({ origin: allowOrigin }));

app.use("/api/todos", todoRouter);
app.use("/api/columns", columnRouter);

app.listen(3000, () => {
  console.log("running in http://localhost:3000");
});
