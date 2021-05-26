const mongoose = require("mongoose");
uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema(
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
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
    social_links: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Social_Link" },
    ],
    contacts: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Contact", required: true },
    ],
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);
userSchema.plugin(uniqueValidator, { message: "is already taken." });

module.exports = mongoose.model("User", userSchema);
