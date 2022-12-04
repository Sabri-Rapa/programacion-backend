const { Schema, model } = require("mongoose");
const { ProductoSchema } = require("./productos");

const carritoSchema = new Schema(
  {
    productos: [ProductoSchema],
    user_id: { type: Schema.ObjectId, required: true },
  },
  { timestamps: true }
);

module.exports = model("carritos", carritoSchema);
