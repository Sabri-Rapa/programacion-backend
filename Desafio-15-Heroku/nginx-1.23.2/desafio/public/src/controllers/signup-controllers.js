const { errorLogger } = require("../utils/loggers");

exports.getSignup = (req, res) => {
  try {
    if (req.isAuthenticated()) {
      res.redirect("/home");
    } else {
      res.render("pages/signup");
    }
  } catch (error) {
    errorLogger.error({
      URmethodL: req.originalUrl,
      method: req.method,
      error: error.message,
    });
    return res.status(500).send({ error: error });
  }
};

exports.signupUser = (req, res) => {
  try {
    const { username } = req.user;
    req.session.username = username;
    res.redirect("/api/home");
  } catch (error) {
    errorLogger.error({
      URmethodL: req.originalUrl,
      method: req.method,
      error: error.message,
    });
    return res.status(500).send({ error: error });
  }
};

exports.errorSignup = (req, res) => {
  try {
    res.render("pages/errorSignup");
  } catch (error) {
    errorLogger.error({
      URmethodL: req.originalUrl,
      method: req.method,
      error: error.message,
    });
    return res.status(500).send({ error: error });
  }
};
