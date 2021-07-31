const db = require("../../models");
const { CODES } = require("../../configs/responseMgr.json");
const utils = require("../../utils");

const fileExtensionType = ["jpg", "jpeg", "png"];
var code = 0;

module.exports = {
  // Country Related Controllers......
  createCountry: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { data } = req.body;
      data["name"] = data.nice_name.toUpperCase();
      data["iso"] = data.iso.toUpperCase();
      data["iso3"] = data.iso3.toUpperCase();
      let country = await new db.country(data).save();
      if (country) {
        utils.sendResponse(res, code, country);
        return;
      }
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
  updateCountry: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { idc } = req.params;
      let { data } = req.body;
      data["name"] = data.nice_name.toUpperCase();
      data["iso"] = data.iso.toUpperCase();
      data["iso3"] = data.iso3.toUpperCase();
      let country = await db.country.updateOne({ _id: idc }, data);
      console.log(country);
      if (country) {
        utils.sendResponse(res, code, country);
        return;
      }
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
  deleteCountry: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { idc } = req.params;
      let country = await db.country.deleteOne({ _id: idc });
      if (country) {
        utils.sendResponse(res, code, country);
        return;
      }
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
  getCountries: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let countries = await db.country
        .find()
        .select("_id name nice_name iso iso3");
      if (countries && countries.length > 0) {
        utils.sendResponse(res, code, countries);
        return;
      }
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
  getCountryStates: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { idc } = req.params;
      let states = await db.state
        .find({ country: idc })
        .select("_id name state_code");
      if (states && states.length > 0) {
        utils.sendResponse(res, code, states);
        return;
      }
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
  getCountryStateCities: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { idc } = req.params;
      let { ids } = req.params;
      let cities = "";
      let states = await db.state
        .find({ country: idc })
        .select("_id name state_code");
      states.map(async (e) => {
        if (ids == e.id) {
          cities = await db.city.find({ state: ids }).select("_id name");
          if (cities && cities.length > 0) {
            console.log(cities.length);
            utils.sendResponse(res, code, cities);
            return;
          }
        }
      });
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
  getCountryByName: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { name } = req.query;
      let country = await db.country
        .findOne({
          $or: [
            { name: name.toUpperCase() },
            { iso: name.toUpperCase() },
            { iso3: name.toUpperCase() },
          ],
        })
        .select("_id name iso nice_name iso3 num_code phone_code");
      if (country) {
        utils.sendResponse(res, code, country);
        return;
      }
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },

  //Category Related Controllers...
  getCategories: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      db.product_category.find().exec((err, categories) => {
        if (err) {
          code = CODES.codeServerError;
          utils.sendResponse(res, code, err);
          return;
        }
        utils.sendResponse(res, code, categories);
        return;
      });
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
  getCategory: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { idc } = req.params;
      let category = await db.product_category.findById(idc);
      if (!category) {
        code = CODES.codeServerError;
        utils.sendResponse(res, code, err);
        return;
      }
      utils.sendResponse(res, code, category);
      return;
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
  createCategory: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { data } = req.body;
      let image = req.files && req.files["image"];
      if (!image) {
        if (data) {
          let category = await new db.product_category(data).save();
          if (!category) {
            code = CODES.codeServerError;
            utils.sendResponse(res, code, err);
            return;
          }
          utils.sendResponse(res, code, category);
          return;
        }
      }
      let fileNameArr = filePhoto.name.split(".");
      let fileExtension = fileNameArr[fileNameArr.length - 1].toLowerCase();
      if (fileExtensionType.indexOf(fileExtension) < 0)
        return utils.sendResponse(res, code, null);
      let fileUrl = `categoryImages/${data.name}.jpg`;
      utils.saveFile(filePhoto, fileUrl).then();
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
  updateCategory: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { idc } = req.params;
      let { data } = req.body;
      let category = await db.product_category.updateOne({ _id: idc }, data);
      if (!category) {
        code = CODES.codeServerError;
        utils.sendResponse(res, code, err);
        return;
      }
      utils.sendResponse(res, code, category);
      return;
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
  daleteCategory: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { idc } = req.params;
      let category = await db.product_category.deleteOne({ _id: idc });
      if (!category) {
        code = CODES.codeServerError;
        utils.sendResponse(res, code, err);
        return;
      }
      utils.sendResponse(res, code, category);
      return;
    } catch (err) {
      code = CODES.codeServerError;
      utils.sendResponse(res, code, err);
      return;
    }
  },
};
