const db = require("../../models");
const { CODES } = require("../../configs/responseMgr.json");
const utils = require("../../utils");

var code = 0;
// const fileExtensionType = ["jpg", "jpeg", "png"];

module.exports = {
  allUsers: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      db.user
        .find()
        .populate("role", "-_id name")
        .populate("contacts", "-_id name number")
        .populate("social_links")
        .populate({
          path: "addresses",
          model: "Address",
          populate: {
            path: "city",
            model: "City",
          },
        })
        .select("-_id name email cnic gender active image_url")
        .exec((err, user) => {
          if (err) {
            utils.sendResponse(res, code, err);
          }
          code = CODES.codeSuccess;
          utils.sendResponse(res, code, user);
        });
      // .populate(
      //   { path: "addresses", populate: { path: "city" } },
      //   "street1 street2 zip location -_id"
      // )
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
    }
  },
};
