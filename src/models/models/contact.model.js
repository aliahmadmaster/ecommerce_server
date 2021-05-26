import { Schema, model } from "mongoose";

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Contact", contactSchema);
