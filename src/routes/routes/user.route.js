const { controllerUser } = require("../../controllers");
const app = require("express");
const routerUser = app.Router();
const { authJwt } = require("../../middlewares");

// const { middlewareAuth } = require('../../middlewares');

// var url = '';
routerUser.get("/", (req, res) => {
  res.send("user routes");
});
routerUser.get(
  "/users",
  [authJwt.verifyToken, authJwt.isAdmin],
  controllerUser.allUsers
);
routerUser.get(
  "/users/role",
  [authJwt.verifyToken, authJwt.isAdmin],
  controllerUser.getRoleBaseUsers
);
routerUser.patch("/update", [authJwt.verifyToken], controllerUser.updateUser);
routerUser.patch(
  "/profile",
  [authJwt.verifyToken],
  controllerUser.updateUserProfilePhoto
);
routerUser.get("/detail", [authJwt.verifyToken], controllerUser.getSingleUser);
module.exports = routerUser;
