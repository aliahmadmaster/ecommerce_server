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
routerStatic.get(`/${url}/country-name`, controllerStatic.getCountryByName);
routerStatic.get(`/${url}/:idc/states`, controllerStatic.getCountryStates);
routerStatic.get(
  `/${url}/:idc/state/:ids/cities`,
  controllerStatic.getCountryStateCities
);

url = "category";
routerStatic.post(`/${url}`, controllerStatic.createCategory);
routerStatic.patch(`/${url}/:idc`, controllerStatic.updateCategory);
routerStatic.delete(`/${url}/:idc`, controllerStatic.daleteCategory);
routerStatic.get(`/${url}`, controllerStatic.getCategories);
routerStatic.get(`/${url}/:idc`, controllerStatic.getCategory);

module.exports = routerStatic;
