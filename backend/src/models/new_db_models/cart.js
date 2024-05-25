const mongoose = require("mongoose");

const DescriptionSchema = new mongoose.Schema({
  product_name: String,
  rating: Number,
});

const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: { type: Number, required: true },
  product_id: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  selected_color: { type: String, required: true },
  selected_size: { type: String, required: true },
  mrp: { type: String, required: true },
  price: { type: String, required: true },
  off_amount: { type: String, required: true },
  discount: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: DescriptionSchema, required: true },
  sub_category_id: { type: Number, required: true },
  main_category_id: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const CartProduct = mongoose.model(
  "Cart",
  ProductSchema,

  "carts"
);

module.exports = CartProduct;
