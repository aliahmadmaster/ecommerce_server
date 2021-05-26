import { Schema, model } from "mongoose";

const child_categorySchema = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  sub_category: {
    type: Schema.Types.ObjectId,
    ref: "Sub_Category",
    required: true,
  },
});

export default model("Child_Category", child_categorySchema);
