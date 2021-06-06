const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  iso: { type: String, required: true },
  name: { type: String, required: true },
  nice_name: { type: String, required: true },
  iso3: { type: String },
  num_code: { type: Number },
  phone_code: { type: Number, required: false },
});
module.exports = mongoose.model("Country", countrySchema);
