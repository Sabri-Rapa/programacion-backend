const { mockProducts } = require("../../db/models/mocks");

exports.getMokeProducts = async () => {
  try {
    let products = await mockProducts();
     return products;
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};
