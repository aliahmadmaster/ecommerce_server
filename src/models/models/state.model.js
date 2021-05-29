const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
    required: true,
  },
  cities: [{ type: mongoose.Schema.Types.ObjectId, ref: "City" }],
});
module.exports = mongoose.model("State", stateSchema);
