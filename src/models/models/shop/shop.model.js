const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate-v2");

const shopSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    owners: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ],
    addresses: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Address", required: true },
    ],
    contacts: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Contact", required: true },
    ],
    social_links: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Social_Link" },
    ],
    shop_level: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop_Level",
      required: true,
    },
    shop_plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop_Plan",
      required: true,
    },
    shop_products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

shopSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Shop", shopSchema);
