const express = require("express");
const router = express.Router();

const {
  getColumnsCallback,
  patchColumnsCallback,
} = require("../functions/column.js");
// /api/columns
// router.get("/count", getTodoCountCallback);
router.get("/", getColumnsCallback);
router.patch("/:groupId", patchColumnsCallback);

module.exports = router;
