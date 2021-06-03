const db = require("../../models");
const { CODES } = require("../../configs/responseMgr.json");
const utils = require("../../utils");

var code = 0;
// const fileExtensionType = ["jpg", "jpeg", "png"];

module.exports = {
  register: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { data } = req.body;
      let firstname = data.first_name;
      let lastname = data.last_name;
      let { contacts, social_links, addresses, role } = data;
      if (contacts) delete data.contacts;
      if (social_links) delete data.social_links;
      if (addresses) delete data.addresses;
      if (role) delete data.role;
      if (firstname && lastname) {
        data["name"] = `${firstname} ${lastname}`; // saving full name by combining firstname and lastname
        delete data.first_name;
        delete data.last_name;
        // finding role id by giving role name
        let resRole = await db.role.findOne({ name: role }).select("_id");
        data["role"] = resRole.id;
        // saving user contacts in contact schema model
        if (contacts && contacts.length > 0) {
          contacts = await db.contact.insertMany(contacts);
          data["contacts"] = contacts.map((contact) => contact.id); // saving their ids in user.contacts
        } else {
          code = CODES.codeServerError;
          nameMessage = `contact must needed`;
          utils.sendResponse(res, code, { error: nameMessage });
          return;
        }
        // saving social_links to its schema ....
        if (social_links && social_links.length > 0) {
          social_links = await db.social_links.insertMany(social_links);
          data["social_links"] = social_links.map((link) => link.id);
        }
        // saving addresses to its schema ....
        if (addresses && addresses.length > 0) {
          addresses = await db.address.insertMany(addresses);
          data["addresses"] = addresses.map((address) => address.id);
        }
        data = await new db.user(data).save((err, user) => {
          if (err) {
            code = CODES.codeServerError;
            utils.sendResponse(res, code, { error: err });
          }
          code = CODES.codeSuccess;
          utils.sendResponse(res, code, user);
        });
      } else {
        code = CODES.codeServerError;
        nameMessage = `first_name and last_name can't be empty`;
        utils.sendResponse(res, code, { error: nameMessage });
      }
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
    }
  },
  signIn: async (req, res) => {
    try {
      let { data } = req.body;
      db.user
        .findOne({
          email: data.email,
        })
        .exec((err, user) => {
          if (err) {
            code = CODES.codeServerError;
            utils.sendResponse(res, code, err);
            return;
          }
          if (!user) {
            code = CODES.codeBadRequest;
            return utils.sendResponse(res, code, {
              error: "email and password is incorrect",
            });
          }
          let passwordValid = utils.matchHashText(data.password, user.password);

          if (!passwordValid) {
            code = CODES.codeUnAuth;
            return utils.sendResponse(res, code, err);
          }
          let token = utils.generateToken(user.id);
          code = CODES.codeSuccess;
          return utils.sendResponse(res, code, { access_token: token });
        });
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
    }
  },
  signOut: async (req, res) => {
    code = CODES.codeSuccess;
    let { data } = req.body;
    if (response.error) {
      code = CODES.codeServerError;
    }
    utils.sendResponse(res, code, dataService);
  },
};
