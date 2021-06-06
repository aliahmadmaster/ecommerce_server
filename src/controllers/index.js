const controllerStatic = require("./controllers/static.controller");
const controllerAuth = require("./controllers/auth.controller");
const controllerUser = require("./controllers/user.controller");
// const controllerFile = require('./controllers/controllerFile');
module.exports = {
  controllerStatic,
  controllerUser,
  controllerAuth,
};
