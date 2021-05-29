const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: false },
  flag: { type: String, required: false },
  states: [{ type: mongoose.Schema.Types.ObjectId, ref: "State" }],
});
module.exports = mongoose.model("Country", countrySchema);
