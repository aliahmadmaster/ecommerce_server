const jwt = require("jsonwebtoken");
const config = require("../../configs/configAuth");
const db = require("../../models");
const utils = require("../../utils");
const { CODES } = require("../../configs/responseMgr.json");

module.exports = {
  verifyToken: async (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      req.userId = decoded.id;
      next();
    });
  },
  isAdmin: async (req, res, next) => {
    db.user.findById(req.userId).exec((err, user) => {
      if (err) {
        code = CODES.codeServerError;
        return utils.sendResponse(res, code, err);
      }
      db.role.findById(user.role).exec((err, role) => {
        if (err) {
          code = CODES.codeServerError;
          return utils.sendResponse(res, code, err);
        }
        if (role.name === "Admin") {
          next();
          return;
        }
        return res.status(403).json({ msg: "Suitable Role required" });
      });
    });
  },
  isVender: async (req, res, next) => {
    db.user.findById(req.userId).exec((err, user) => {
      if (err) {
        code = CODES.codeServerError;
        return utils.sendResponse(res, code, err);
      }
      db.role.findById(user.role).exec((err, role) => {
        if (err) {
          code = CODES.codeServerError;
          return utils.sendResponse(res, code, err);
        }
        if (role.name === "Vender") {
          next();
          return;
        }

        return res.status(403).json({ msg: "Suitable Role required" });
      });
    });
  },
};
