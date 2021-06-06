const mongoose = require("mongoose");
uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

var mongoosePaginate = require("mongoose-paginate-v2");

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
    image_url: { type: String },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: [true, "contact can not empty"],
    },
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
userSchema.pre("save", function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hashSync(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});
userSchema.plugin(uniqueValidator, { message: "is already taken." });

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("User", userSchema);
