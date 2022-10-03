const { mockProducts } = require("../../db/models/mocks/index");

exports.getMokeProducts = async (req, res) => {
  try {
    let products = await mockProducts();
    res.render("pages/products", { products: products });
  } catch (err) {
    console.log(err);
  }
};
