const insertUser = require("../db/User/insertUser.js");
const statusCode = require("../utils/statusCode.js");
const errorMessage = require("../utils/errorMessage.js");

async function postUserCallback(req, res) {
  try {
    const data = req.body;
    const result = await insertUser(data);
    const authorization = data.authorization;
    const response = {
      authorization,
    };
    return res.status(statusCode.OK).json(response);
  } catch (e) {
    console.log(e);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(errorMessage.SERVER_ERROR);
  }
}
