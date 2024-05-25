const mongoose = require("mongoose");

// Define the schema
const yourSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String, unique: true },
  code: { type: String },
  discount: { type: String },
  productId: {
    type: Number,
  },
});

// Create a model
const Brand = mongoose.model(
  "coupon",
  yourSchema,

  "coupon"
);

module.exports = Brand;
