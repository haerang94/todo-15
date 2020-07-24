const authenticateDB = require("../db/authenticate.js");
const statusCode = require("../utils/statusCode.js");
const errorMessage = require("../utils/errorMessage.js");

async function authenticate(req, res, next) {
  try {
    const userId = req.body.userId;
    if (!userId) throw new Error();
    await authenticateDB(userId);
    next();
  } catch (e) {
    return res.status(statusCode.UNAUTHORIZED).send(errorMessage.UNAUTHORIZED);
  }
}

module.exports = authenticate;
