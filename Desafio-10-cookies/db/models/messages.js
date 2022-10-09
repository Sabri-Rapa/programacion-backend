const { Schema, model } = require("mongoose");

const MessageSchema = new Schema(
  {
    author: {
      id: { type: String, required: true },
      nombre: { type: String, required: true },
      apellido: { type: String, required: true },
      edad: { type: Number, required: true },
      alias: { type: String, required: true },
      avatar: { type: String, required: true },
    },
    text: { type: String, required: true },
  },
);

module.exports = model("Messages", MessageSchema);
