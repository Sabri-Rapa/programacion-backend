const { Router } = require("express");
const router = Router();
const Contenedor = require("./contenedor");

const contenedor = new Contenedor("productos");

router.get("/form", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.get("/", async (req, res) => {
  try {
    let getProducts = await contenedor.getAll();
    res.send(getProducts);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let getProduct = await contenedor.getById(id);

    getProduct
      ? res.send(getProduct)
      : res.send({ error: "Producto no encontrado" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  const { body } = req;
  try {
    await contenedor.save(body);
    res.send({ Estado: "success", producto: body });
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    let getProduct = await contenedor.getById(id);

    if (getProduct) {
      await contenedor.update(id, body);
      res.send({ producto_modificado: body });
    } else {
      res.send({ error: "Producto no encontrado" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  try {
    let getProduct = await contenedor.getById(id);

    if (getProduct) {
      await contenedor.deleteById(id);

      res.send({ producto_eliminado: getProduct });
    } else {
      res.send({ error: "Producto no encontrado" });
    }

    res.send();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
