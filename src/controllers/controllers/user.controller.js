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
          populate: {
            path: "city",
          },
        })
        .select("-_id name email cnic gender active image_url")
        .exec((err, user) => {
          if (err) {
            utils.sendResponse(res, code, err);
            return;
          }
          code = CODES.codeSuccess;
          utils.sendResponse(res, code, user);
          return;
        });
      // .populate(
      //   { path: "addresses", populate: { path: "city" } },
      //   "street1 street2 zip location -_id"
      // )
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
  updateUser: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { idu } = req.params;
      let { data } = req.body;
      let { first_name, last_name, contacts, social_links, addresses, role } =
        data;
      if (contacts) delete data.contacts;
      if (social_links) delete data.social_links;
      if (addresses) delete data.addresses;
      if (role) delete data.role;
      if (first_name && last_name) {
        data["name"] = `${first_name} ${last_name}`; // saving full name by combining firstname and lastname
        delete data.first_name;
        delete data.last_name;
        // finding role id by giving role name
        let resRole = await db.role.findOne({ name: role }).select("_id");
        data["role"] = resRole.id;

        if (contacts && contacts.length > 0) {
          let user = db.user.findById(idu);
          if (user) {
            user_contacts = user.contacts;
            console.log(user_contacts);
          }
        }
      }
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
};
