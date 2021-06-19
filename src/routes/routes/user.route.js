const { controllerUser } = require("../../controllers");
const app = require("express");
const routerUser = app.Router();

// const { middlewareAuth } = require('../../middlewares');

// var url = '';
routerUser.get("/", (req, res) => {
  res.send("user routes");
});
routerUser.get("/users", controllerUser.allUsers);
routerUser.patch("/update/:idu", controllerUser.updateUser);
module.exports = routerUser;
