const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
  },
  password: { type: String, required: true },

  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  joinDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
