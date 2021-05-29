const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate-v2");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    sub_category: { type: mongoose.Schema.Types.ObjectId, ref: "Sub_Category" },
    child_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Child_Category",
    },
    product_code: { type: String, required: true },
    quantity: { type: Number, required: true },
    sizes: [{ type: String }],
    colors: [{ type: String }],
    models: [{ type: String }],
    images: [{ type: String }],
    prices: [{ type: Number }],
    tags: [{ type: String }],
    actual_price: { type: Number, required: true },
    description: { type: String, required: true },
    offers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Offer" }],
    currency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Currency",
      required: true,
    },
    shop: { type: mongoose.Schema.Types.ObjectId, ref: "Shop", required: true },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand" },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

productSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Product", productSchema);
