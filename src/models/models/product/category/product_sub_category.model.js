const mongoose = require("mongoose");

const sub_categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  child_categories: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Child_Category" },
  ],
});
module.exports = mongoose.model("Sub_Category", sub_categorySchema);
