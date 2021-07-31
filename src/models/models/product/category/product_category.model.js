const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, default: "categoryImages/defultCategory.png" },
  product_percent: { type: Number, required: true },
});
module.exports = mongoose.model("Category", categorySchema);
