const { Schema, model } = require("mongoose");

const ProductsSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  price: { type: Number, required: true, max: 100 },
  thumbnail: { type: String, required: true, max: 100 },
  descripción: { type: String, required: true },
  codigo: { type: Number, required: true },
  stock: { type: Number, required: true },
  timestamps: { type: String, required: true }
});

module.exports = model('products', ProductsSchema);
