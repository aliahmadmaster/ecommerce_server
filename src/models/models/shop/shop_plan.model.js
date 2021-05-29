const mongoose = require("mongoose");

const shop_planSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    cost: { type: String },
    benefits: { type: String },
    expiration: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shop_Plan", shop_planSchema);
