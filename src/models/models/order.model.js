const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    order_number: { type: String, default: "100OR001" },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    // payment: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Payment",
    //   required: true,
    // },
    // rider: { type: mongoose.Schema.Types.ObjectId, ref: "Rider" },
    // user_acceptance: { type: mongoose.Schema.Types.ObjectId, ref: "Order_Acceptance" },
    Delivered: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
