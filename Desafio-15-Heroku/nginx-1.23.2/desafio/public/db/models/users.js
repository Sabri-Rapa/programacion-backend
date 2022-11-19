const { Schema, model } = require("mongoose");

const UsersSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },

  {
    versionKey: false,
  }
);

module.exports = model("Users", UsersSchema);
