const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    tailorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tailor",
      required: true,
    },

    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ["Processing", "Cancelled", "Pending", "Completed"],
      default: "Processing",
    },

    accepted: {
      type: String,
      enum:["true", "false","null"],
      default: "null",
    },

    totalOrders:
    {
      type:Number
    },

    completedOrders:
    {
      type:Number
    },

    pendingOrders:
    {
      type:Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
