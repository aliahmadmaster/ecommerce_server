import { Schema, model } from "mongoose";

const offerSchema = new Schema({
  name: { type: String, required: true },
  sku: { type: String },
  percent: { type: String },
  currency: { type: Schema.Types.ObjectId, ref: "Currency", required: true },
  expiration: { type: Date, default: Date.now },
});
export default model("Offer", offerSchema);
