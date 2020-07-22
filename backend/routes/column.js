const express = require("express");
const router = express.Router();

const { getColumnsCallback } = require("../functions/column.js");
// /api/columns
// router.get("/count", getTodoCountCallback);
router.get("/", getColumnsCallback);

module.exports = router;
