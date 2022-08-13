const { Router } = require("express");
const router = Router();
const Contenedor = require("./contenedor");

const contenedor = new Contenedor("productos");

router.get("/products", async (req, res) => {
  try {
    let products = await contenedor.getAll();
    products?
    res.render("products", { products: products })
    :
    res.render("noProducts")
  } catch (err) {
    console.log(err);
  }
});

router.get("/form", async (req, res) => {
  try {
    res.render("form", {});
  } catch (err) {
    console.log(err);
  }
});

router.post("/products", async (req, res) => {
  const { body } = req;
  try {
    await contenedor.save(body);
    res.redirect("/api/products");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
