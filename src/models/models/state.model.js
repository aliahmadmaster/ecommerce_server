import { Schema, model } from "mongoose";

const stateSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String },
  country: { type: Schema.Types.ObjectId, ref: "Country", required: true },
  cities: [{ type: Schema.Types.ObjectId, ref: "City" }],
});

export default model("State", stateSchema);
