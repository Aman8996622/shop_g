
const mongoose = require('mongoose');

// Define the schema
const yourSchema = new mongoose.Schema({
    id: { type: Number },
   
    name: { type: String, unique: true },
    description: { type: String },
    images: { type: String },
    rating: { type: Number }
});

// Create a model
const  Brand = mongoose.model('brand', yourSchema);

module.exports = Brand;
