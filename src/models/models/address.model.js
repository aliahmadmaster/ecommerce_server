import { Schema, model } from "mongoose";

const addressSchema = new Schema(
  {
    street1: { type: String, required: true },
    street2: { type: String },
    city: { type: Schema.Types.ObjectId, ref: "City", required: true },
    zip: { type: String, required: true },
    location: { type: Point, required: false },
  },
  { timestamps: true }
);
const Point = new Schema({
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

export default model("Address", addressSchema);
