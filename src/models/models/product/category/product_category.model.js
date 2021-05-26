import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  sub_categories: [{ type: Schema.Types.ObjectId, ref: "Sub_Category" }],
});

export default model("Category", categorySchema);
