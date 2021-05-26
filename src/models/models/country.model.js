import { Schema, model } from "mongoose";

const countrySchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: false },
  flag: { type: String, required: false },
  states: [{ type: Schema.Types.ObjectId, ref: "State" }],
});

export default model("Country", countrySchema);
