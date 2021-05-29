const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  state: { type: mongoose.Schema.Types.ObjectId, ref: "State", required: true },
});
module.exports = mongoose.model("City", citySchema);
