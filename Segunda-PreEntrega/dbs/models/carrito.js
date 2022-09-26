import { Schema, model }from 'mongoose';

const carritoSchema = new Schema({
    timestamp: { type: Date, required: true },
    productos: { type: Array, required: true },
});

export default model('carritos', carritoSchema);
