import { Schema, model } from "mongoose";
uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
      index: true,
    },
    password: { type: String, required: true },
    cnic: { type: String, unique: true },
    image_url: { type: String, unique: true },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    role: { type: Schema.Types.ObjectId, ref: "Role", required: true },
    social_links: [{ type: Schema.Types.ObjectId, ref: "Social_Link" }],
    contacts: [{ type: Schema.Types.ObjectId, ref: "Contact", required: true }],
    addresses: [{ type: Schema.Types.ObjectId, ref: "Address" }],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);
userSchema.plugin(uniqueValidator, { message: "is already taken." });

export default model("User", userSchema);
