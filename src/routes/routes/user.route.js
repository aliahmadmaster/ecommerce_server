const controllers = require("../../controllers");
const app = require("express");
const routerUser = app.Router();

// const { middlewareAuth } = require('../../middlewares');

// var url = '';
routerUser.get("/", (req, res) => {
  res.send("user routes");
});
routerUser.get("/users", controllers.controllerUser.allUsers);
module.exports = routerUser;
