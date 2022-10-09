const { Router } = require("express");

const router = Router();

router.get("/root", (req, res) => {
  res.send("<h3>Te damos la bienvenida</h3>");
});

router.get("/root/:name", (req, res) => {
  const { name } = req.params;

  if (!req.session[name]) {
    req.session[name] = {};
    req.session[name].name = name;  
    req.session[name].cantidadDeLogins = 1;

  } else {

    req.session[name].cantidadDeLogins += 1;

  }

  res.send(
    `<h3>Bienvenido ${name}. Visitaste la página ${req.session[name].cantidadDeLogins} veces</h3>`
  );
});

router.get("/olvidar", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.json({ status: "Logout ERROR", body: err });
    }
    res.send("Logout ok!");
  });
});

module.exports = router;
