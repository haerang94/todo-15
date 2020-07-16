const express = require("express");
const path = require("path");
const cors = require('cors');

const todoRouter = require("./routes/todo.js");
const userRouter = require('./routes/user.js');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
  origin : 'http://localhost:9000'
}))
app.use("/api/todo", todoRouter);
app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log('running in 3000 port');
})
