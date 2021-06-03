const controllers = require("../../controllers");
const app = require("express");
const routerAuth = app.Router();

// const { middlewareAuth } = require('../../middlewares');

// var url = '';
routerAuth.get("/", (req, res) => {
  res.send("auth routes");
});
routerAuth.post("/register", controllers.controllerAuth.register);
routerAuth.post("/signin", controllers.controllerAuth.signIn);
routerAuth.post("/signout", controllers.controllerAuth.signOut);
module.exports = routerAuth;
