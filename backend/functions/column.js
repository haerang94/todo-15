const getColumns = require("../db/Column/getColumn.js");

const statusCode = require("../utils/statusCode.js");
const errorMessage = require("../utils/errorMessage.js");

async function getColumnsCallback(req, res) {
  try {
    const result = await getColumns();
    const response = {
      data: result[0],
    };
    return res.status(statusCode.OK).json(response);
  } catch (e) {
    return res.status(statusCode.DB_ERROR).send(errorMessage.DB_ERROR);
  }
}

module.exports = { getColumnsCallback };
