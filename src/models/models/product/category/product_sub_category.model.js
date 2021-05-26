import { Schema, model } from "mongoose";

const sub_categorySchema = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  child_categories: [{ type: Schema.Types.ObjectId, ref: "Child_Category" }],
});

export default model("Sub_Category", sub_categorySchema);
