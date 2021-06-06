const { controllerStatic } = require("../../controllers");
const app = require("express");
const routerStatic = app.Router();

// const { middlewareAuth } = require('../../middlewares');

var url = "";
routerStatic.get("/", (req, res) => {
  res.send("static routes");
});
url = "countries";
routerStatic.post(`/${url}`, controllerStatic.createCountry);
routerStatic.patch(`/${url}/:idc`, controllerStatic.updateCountry);
routerStatic.delete(`/${url}/:idc`, controllerStatic.deleteCountry);
routerStatic.get(`/${url}`, controllerStatic.getCountries);
routerStatic.get(`/${url}/:idc/states`, controllerStatic.getCountryStates);
// routerStatic.get(`/${url}/:idc/states/:ids/cities`, controllerStatic.getStateCities);

module.exports = routerStatic;
