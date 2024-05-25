const mongoose = require("mongoose");
const { Schema } = mongoose;

const yourModelSchema = new Schema({
  id: {
    type: Number,
    default: 0,
  },
  product_id: {
    type: Number,
    default: 0,
  },
  cartId: {
    type: Number,
    default: 0,
    },
  name: {
    type: String,
    default: "",
  },
  updated_at: {
    type: Date,
    default: () => Date.now(),
  },
  created_at: {
    type: Date,
    default: () => Date.now(),
  },
});

const SubCategory = mongoose.model("sub_categories", yourModelSchema);

module.exports = SubCategory;
