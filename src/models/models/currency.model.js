const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  country: { type: mongoose.Schema.Types.ObjectId },
});

module.exports = mongoose.model("Currency", currencySchema);
