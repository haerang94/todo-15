const express = require("express");
const router = express.Router();

const { postUserCallback } = require("../functions/user.js");

router.post("/", postUserCallback);
module.exports = router;
