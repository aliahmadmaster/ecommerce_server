const mongoose = require("mongoose");

const child_categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  sub_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sub_Category",
    required: true,
  },
});
module.exports = mongoose.model("Child_Category", child_categorySchema);
