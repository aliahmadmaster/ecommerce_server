import { Schema, model } from "mongoose";

const citySchema = new Schema({
  name: { type: String, required: true },
  code: { type: String },
  state: { type: Schema.Types.ObjectId, ref: "State", required: true },
});

export default model("City", citySchema);
