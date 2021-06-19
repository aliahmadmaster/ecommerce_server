const mongoose = require("mongoose");
uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");
var mongoosePaginate = require("mongoose-paginate-v2");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: [true, "email can't be blank"],
      unique: true,
      index: true,
    },
    password: { type: String, required: true },
    cnic: { type: String, unique: true },
    image_url: { type: String },
    gender: { type: String, enum: ["male", "female"] },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: [true, "role can't empty"],
    },
    contacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contact",
        required: [true, "contact can't empty"],
      },
    ],
    social_links: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Social_Link" },
    ],
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);
userSchema.pre("save", function (next) {
  var user = this;
  if (!user.isModified("password")) return next(); // only hash the password if it has been modified (or is new)
  bcrypt.genSalt(10, function (err, salt) {
    // generate a salt
    if (err) return next(err);
    bcrypt.hashSync(user.password, salt, function (err, hash) {
      // hash the password using our new salt
      if (err) return next(err);
      user.password = hash; // override the cleartext password with the hashed one
      next();
    });
  });
});
userSchema.plugin(uniqueValidator, { message: "is already taken." });
userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("User", userSchema);
