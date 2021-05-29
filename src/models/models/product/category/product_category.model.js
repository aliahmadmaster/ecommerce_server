const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  sub_categories: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Sub_Category" },
  ],
});
module.exports = mongoose.model("Category", categorySchema);
