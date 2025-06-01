const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    brand: { type: String, default: 0 },
}, {timestamps: true });

module.exports = mongoose.model('Producto', ProductSchema);