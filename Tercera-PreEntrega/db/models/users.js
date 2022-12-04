const { Schema, model } = require("mongoose");

const UsersSchema = new Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
    edad: { type: Number, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    avatar: { type: String, required: false },
    cart_id: { type: Schema.ObjectId },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Users", UsersSchema);
