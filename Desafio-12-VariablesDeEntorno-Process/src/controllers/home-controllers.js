const { getMokeProducts } = require("./mokeProducts");

exports.getHome = async (req, res) => {
  try {
    const products = await getMokeProducts();

    res.render("pages/home", {
      products: products,
      name: req.session.username,
    });
  } catch (err) {
    console.log(err);
  }
};
