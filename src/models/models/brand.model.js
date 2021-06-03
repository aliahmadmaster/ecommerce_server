const mongoose = require("mongoose");
uniqueValidator = require("mongoose-unique-validator");

var mongoosePaginate = require("mongoose-paginate-v2");

const brandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    url: { type: String, unique: true },
    description: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, required: true },
    sub_category: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);
brandSchema.plugin(uniqueValidator, {
  message: "Brand name is already taken.",
});

brandSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Brand", brandSchema);
