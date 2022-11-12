const { errorLogger } = require("../utils/loggers");

exports.getLogin = (req, res) => {
  try {
    if (req.isAuthenticated()) {
      res.redirect("/home");
    } else {
      res.render("pages/login");
    }
  } catch (err) {
    errorLogger.error({
      URmethodL: req.originalUrl,
      method: req.method,
      error: err.message,
    });
    return res.status(500).send({ error: err });
  }
};

exports.authenticatedUser = (req, res) => {
  try {
    const { username } = req.body;
    req.session.username = username;

    res.redirect("/api/home");
  } catch (err) {
    errorLogger.error({
      URmethodL: req.originalUrl,
      method: req.method,
      error: err.message,
    });
    return res.status(500).send({ error: err });
  }
};

exports.errorLogin = (req, res) => {
  try {
    res.render("pages/errorLogin");
  } catch (err) {
    errorLogger.error({
      URmethodL: req.originalUrl,
      method: req.method,
      error: err.message,
    });
    return res.status(500).send({ error: err });
  }
};
