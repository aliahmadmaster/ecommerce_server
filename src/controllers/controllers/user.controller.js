const db = require("../../models");
const { CODES } = require("../../configs/responseMgr.json");
const utils = require("../../utils");

var code = 0;
// const fileExtensionType = ["jpg", "jpeg", "png"];

module.exports = {
  allUsers: async (req, res) => {
    code = CODES.codeSuccess;
    try {
    } catch (err) {}
  },
};
