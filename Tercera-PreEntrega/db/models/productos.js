const { Schema, model } = require("mongoose");

const ProductoSchema = new Schema({
    timestamp: { type: String, required: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    // descripcion: { type: String, required: true },
    stock: { type: Number, required: true },
});

const productos = model("productos", ProductoSchema);
module.exports = { productos, ProductoSchema };
