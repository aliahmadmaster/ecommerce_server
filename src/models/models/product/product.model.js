import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    sub_category: { type: Schema.Types.ObjectId, ref: "Sub_Category" },
    child_category: { type: Schema.Types.ObjectId, ref: "Child_Category" },
    product_code: { type: String, required: true },
    quantity: { type: Number, required: true },
    sizes: [{ type: String }],
    colors: [{ type: String }],
    models: [{ type: String }],
    images: [{ type: String }],
    prices: [{ type: Number }],
    tags: [{ type: String }],
    actual_price: { type: Number },
    description: { type: String, required: true },
    offers: [{ type: Schema.Types.ObjectId, ref: "Offer" }],
    Currency: { type: Schema.Types.ObjectId, ref: "Currency", required: true },
    shop: { type: Schema.Types.ObjectId, ref: "Shop", required: true },
    brand: { type: Schema.Types.ObjectId, ref: "Brand" },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model("User", productSchema);
