import { Schema, model } from "mongoose";

const social_linkSchema = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    // user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default model("Social_Link", social_linkSchema);
