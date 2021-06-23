const db = require("../../models");
const { CODES } = require("../../configs/responseMgr.json");
const utils = require("../../utils");

var code = 0;
// const fileExtensionType = ["jpg", "jpeg", "png"];

module.exports = {
  allUsers: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      // let { Country, State, City } = req.query;
      db.user
        .find()
        .populate("role", "-_id name")
        .populate("contacts", "-_id name number")
        .populate("social_links", "-_id name url")
        .populate({
          path: "addresses",
          select:
            "-_id street1 street2 zip location.coordinates location.type city",
          populate: [
            {
              path: "city",
              select: "-_id name state",
              populate: {
                path: "state",
                select: "-_id name state_code country",
                populate: {
                  path: "country",
                  select: "-_id iso nice_name phone_code ",
                },
              },
            },
          ],
        })
        .select("-_id name email cnic gender active image_url")
        .exec((err, user) => {
          if (err) {
            utils.sendResponse(res, code, err);
            return;
          }
          // let Length = user.length;
          // let users = [];
          // user.map((e) => {
          //   e.addresses.map((add) => {
          //     if (Country) {
          //       if (add.city.state.country.nice_name == Country) {
          //         if (State) {
          //           if (add.city.state.name == State) {
          //             if (City) {
          //               if (add.city.name == City) {
          //                 if (users == "") users.push(e);
          //                 users.map((g) => {
          //                   if (users.length < Length) {
          //                     if (g.name != e.name) {
          //                       users.push(e);
          //                       g.name = e.name;
          //                     }
          //                   }
          //                 });
          //               }
          //             } else {
          //               if (users == "") users.push(e);
          //               users.map((g) => {
          //                 if (users.length < Length) {
          //                   if (g.name != e.name) {
          //                     users.push(e);
          //                     g.name = e.name;
          //                   }
          //                 }
          //               });
          //             }
          //           }
          //         } else {
          //           if (users == "") users.push(e);
          //           users.map((g) => {
          //             if (users.length < Length) {
          //               if (g.name != e.name) {
          //                 users.push(e);
          //                 g.name = e.name;
          //               }
          //             }
          //           });
          //         }
          //       }
          //     } else {
          //       if (users == "") users.push(e);
          //       users.map((g) => {
          //         if (users.length < Length) {
          //           if (g.name != e.name) {
          //             users.push(e);
          //             g.name = e.name;
          //           }
          //         }
          //       });
          //     }
          //   });
          // });
          code = CODES.codeSuccess;
          utils.sendResponse(res, code, user);
          return;
        });
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
  getRoleBaseUsers: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { Role } = req.query;
      db.user
        .find()
        .populate({
          path: "role",
          select: "-_id name",
          match: { name: `${Role}` },
        })
        .populate("contacts", "-_id name number")
        .populate("social_links", "-_id name url")
        .populate({
          path: "addresses",
          select:
            "-_id street1 street2 zip location.coordinates location.type city",
          populate: [
            {
              path: "city",
              select: "-_id name state",
              populate: {
                path: "state",
                select: "-_id name state_code country",
                populate: {
                  path: "country",
                  select: "-_id iso nice_name phone_code ",
                },
              },
            },
          ],
        })
        .select("-_id name email cnic gender active image_url")
        .exec((err, user) => {
          if (err) {
            utils.sendResponse(res, code, err);
            return;
          }
          let users = user.filter((e) => e.role !== null);
          code = CODES.codeSuccess;
          utils.sendResponse(res, code, users);
          return;
        });
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
      var user = await db.user.findById(idu);
      if (!user) {
        code = CODES.codeNotFound;
        utils.sendResponse(res, code, { message: "user not found" });
        return;
      }
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
        console.log(data);
        // finding role id by giving role name
        let resRole = await db.role.findOne({ name: role }).select("_id");
        data["role"] = resRole.id;
        if (contacts && contacts.length > 0) {
          user_contacts = user.contacts;
        }
      }
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
};
