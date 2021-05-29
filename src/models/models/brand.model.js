const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    url: { type: String },
    description: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, required: true },
    sub_category: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Brand", brandSchema);
