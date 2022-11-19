const { getMokeProducts } = require("./mokeProducts");
const { errorLogger } = require("../utils/loggers");

exports.getHome = async (req, res) => {
  try {
    const products = await getMokeProducts();

    res.render("pages/home", {
      products: products,
      name: req.session.username,
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
