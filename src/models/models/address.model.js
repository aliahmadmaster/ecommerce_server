const mongoose = require("mongoose");

const Point = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const addressSchema = new mongoose.Schema(
  {
    street1: { type: String, required: true },
    street2: { type: String },
    city: { type: mongoose.Schema.Types.ObjectId, ref: "City", required: true },
    zip: { type: String, required: true },
    location: { type: Point, index: "2dsphere", required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", addressSchema);
