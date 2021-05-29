const mongoose = require("mongoose");

const shop_levelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  benefits: { type: String },
});
module.exports = mongoose.model("Shop_Level", shop_levelSchema);
