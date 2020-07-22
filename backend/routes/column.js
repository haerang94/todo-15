const express = require("express");
const router = express.Router();

const {
  getColumnsCallback,
  patchColumnsCallback,
} = require("../functions/column.js");
router.get("/", getColumnsCallback);
router.patch("/:groupId", patchColumnsCallback);

module.exports = router;
