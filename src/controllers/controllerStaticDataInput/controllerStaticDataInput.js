/**
 * Copyright 2021-present, moistTech Pvt Ltd, Inc. All rights reserved.
 *
 * for JawaidESolutions Backend service E-Commerce Management
 */
const db = require("../../models");
function funuserrole() {
  db.role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new db.role({
        name: "User",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new db.role({
        name: "Vender",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'vender' to roles collection");
      });
      new db.role({
        name: "Admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}
function funProductCategories() {
  db.product_category.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new db.product_category({
        name: "Electronics",
        product_percent: 5,
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added Electronics to productCategory collection");
      });
      new db.product_category({
        name: "Fabric or Clothes",
        product_percent: 4,
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added Clothes to productCategory collection");
      });
      new db.product_category({
        name: "Fashion or Cosmatics",
        product_percent: 5,
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added Cosmatics to productCategory collection");
      });
    }
  });
}

function loadStaticData() {
  funuserrole();
  funProductCategories();
  require("./controllerCountriesStatic/controllerCountriesStaticInput")();
}

module.exports = loadStaticData;
