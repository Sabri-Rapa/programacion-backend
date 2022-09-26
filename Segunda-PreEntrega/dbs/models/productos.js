import { Schema, model }from 'mongoose';

const productoSchema = new Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    descripcion: { type: String, required: true },
    stock: { type: Number, required: true },
});

export default model('productos', productoSchema);
