const { errorLogger } = require("../utils/loggers");

exports.getLogout = (req, res) => {
  try {
    let username = req.session.username;
    req.session.destroy((error) => {
      if (error) {
        errorLogger.error({
          URmethodL: req.originalUrl,
          method: req.method,
          error: error.message,
        });
        return res.status(500).send({ error: error });
      }
      res.render("pages/logout", { name: username });
    });
  } catch (error) {
    errorLogger.error({
      URmethodL: req.originalUrl,
      method: req.method,
      error: error.message,
    });
    return res.status(500).send({ error: error });
  }
};
