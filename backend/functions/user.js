const insertUser = require("../db/User/insertUser.js");
const statusCode = require("../utils/statusCode.js");
const errorMessage = require("../utils/errorMessage.js");

async function postUserCallback(req, res) {
  try {
    const data = req.body;
    const result = await insertUser(data);
    const response = {
      authorization: data.authorziation,
      id: result[0].insertId,
      username: data.username,
    };
    return res.status(statusCode.OK).json(response);
  } catch (e) {
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(errorMessage.SERVER_ERROR);
  }
}

module.exports = { postUserCallback };
