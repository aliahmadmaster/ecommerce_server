const db = require("../../models");
const { CODES } = require("../../configs/responseMgr.json");
const utils = require("../../utils");

var code = 0;

module.exports = {
  createCountry: async (req, res) => {
    code = CODES.codeSuccess;
    try {
      let { data } = req.body;
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
      let country = await new db.country.findByIdAndUpdate(idc, data);
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
      let country = await new db.country.findByIdAndDelete(idc);
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
      let { ids } = req.params;
      let states = db.state.findById(ids).select("_id name state_code");
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
};
