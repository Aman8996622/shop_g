// Import Mongoose
const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

// Define the UserAddress schema
const userAddressSchema = new Schema({
  address_id: {
    type: Number,
    unqiue: true,
  },
  user_id: {
    // References the user's id
    required: true,
    ref: "User", // Assuming there's a User model
  },
  contact_no: {
    type: String,
  },
  address_line1: {
    type: String,
    required: true,
  },
  address_line2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postal_code: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  address_type: {
    type: String,
    enum: ["home", "work", "other"], // Example types of addresses
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// Add a pre-save hook to update the updated_at field
userAddressSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

// Create the model from the schema
const UserAddress = mongoose.model(
  "UserAddress",
  userAddressSchema,
  "UserAddress"
);

// Export the model
module.exports = UserAddress;
