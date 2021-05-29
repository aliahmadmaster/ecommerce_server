const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sku: { type: String },
    percent: { type: String },
    currency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Currency",
      required: true,
    },
    expiration: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Offer", offerSchema);
