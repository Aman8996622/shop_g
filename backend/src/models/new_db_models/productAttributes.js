const mongoose = require("mongoose");

// Define the schema
const yourSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  productId: { type: Number },
  name: { type: String },
  value: {
    type: String,
  },
  imageUrl: { type: String },
});

// Create a model
const ProductAttribute = mongoose.model(
  "attributes",
  yourSchema,
  "productAttribute"
);

module.exports = ProductAttribute;
