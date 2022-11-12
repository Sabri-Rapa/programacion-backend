const { errorLogger } = require("../utils/loggers");

class MessagesContenedor {
  constructor(options, model, errorLogger) {
    this.conectionDB = options;
    this.model = model;
    this.errorLogger = errorLogger;
  }

  async save(message) {
    try {
      let timestamp = new Date();
      message.timestamp = timestamp;
      this.model.create(message);
      return message;
    } catch (error) {
      errorLogger.error({
        error: error.message,
      });
    }
  }

  async getAll() {
    try {
      let messages = await this.model.find({});
      return messages;
    } catch (error) {
      errorLogger.error({
        error: error.message,
      });
    }
  }
}

module.exports = MessagesContenedor;
