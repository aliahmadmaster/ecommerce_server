const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./models/user/user.model");
db.role = require("./models/role.model");

db.ROLES = ["user", "admin", "vender"];

module.exports = db;
