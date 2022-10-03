const mongoose = require("mongoose");

class MessagesContenedor {
  constructor(options, model) {
    this.conectionDB = options;
    this.model = model;
  }

  async save(message) {
    try {
      await this.model.create(message);
      return message;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getAll() {
    try {
      let messages = await this.model.find({});
      return messages;
    } catch (error) {
      throw Error(error.message);
    }
  }
}

module.exports = MessagesContenedor;
