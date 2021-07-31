const bcrypt = require("bcrypt");
const saltRounds = 10;
const moment = require("moment");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../configs/configAuth");
const { MESSAGES } = require("../configs/responseMgr.json");
var fs = require("fs");

module.exports = {
  dirFiles: {
    emailFiles: "files/emailFiles",
    productFiles: "files/productFiles",
    shopFiles: "files/shopFiles",
    userFiles: "files/userFiles",
  },
  hashText: function (plainText) {
    return bcrypt.hashSync(plainText, saltRounds);
  },
  matchHashText: function (plainText, hashText) {
    return bcrypt.compareSync(plainText, hashText);
  },
  generateToken: function (id) {
    let token = jwt.sign({ id: id }, jwtSecret);
    return token ? token : "123fack-access-token123";
  },
  cleanJsonObject: function (data) {
    return JSON.parse(JSON.stringify(data));
  },
  getTimeSince: function (date) {
    return moment(date).fromNow();
  },
  sendResponse: function (res, code, data) {
    res.status(code);
    res.json({ data: data, msg: MESSAGES[code] });
    res.end();
  },
  parseError: function (error) {
    console.log(error);
    return (error && error.errors && error.errors[0].message) || error.name;
  },

  uploadFile: function (file, url) {
    let urlSplit = url.split("/");
    let urlfolder = urlSplit[0];
    let urlId = urlSplit[1];
    let urlprofile = urlSplit[2];
    let dir = `./src/public/${urlfolder}/${urlId}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {
        recursive: true,
      });
    }
    let fileUploadPath = "src/public/";
    return new Promise((resolve, reject) => {
      file.mv(
        `${fileUploadPath}/${urlfolder}/${urlId}/${urlprofile}`,
        async function (err) {
          if (err) {
            reject(false);
          }
          resolve(true);
        }
      );
    });
  },
  saveFile: function (file, url) {
    let fileUploadPath = "src/public/";
    return new Promise((resolve, reject) => {
      file.mv(`${fileUploadPath}/${url}`, async function (err) {
        if (err) {
          reject(false);
        }
        resolve(true);
      });
    });
  },
};
