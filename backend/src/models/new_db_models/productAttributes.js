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
  images: { type: String },
});

// Create a model
const Brand = mongoose.model("attributes", yourSchema, "attributes");

module.exports = Brand;
