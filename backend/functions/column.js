const getColumns = require("../db/Column/getColumn.js");
const patchColumn = require("../db/Column/patchColumn.js");

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

async function patchColumnsCallback(req, res) {
  try {
    const groupId = req.params.groupId;
    const groupTitle = req.body.groupTitle;
    const result = await patchColumn(groupId, groupTitle);
    if (result[0].affectedRows !== 1) throw new Error();
    return res.sendStatus(statusCode.OK);
  } catch (e) {
    return res.status(statusCode.DB_ERROR).send(errorMessage.DB_ERROR);
  }
}

module.exports = { getColumnsCallback, patchColumnsCallback };
