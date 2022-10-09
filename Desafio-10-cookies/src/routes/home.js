const { Router } = require("express");
const { isLoginActiv } = require("../controllers/sesion");

const router = Router();

router.get("/", isLoginActiv, (req, res) => {
  res.render("pages/home", { name: req.session.username });
});

module.exports = router;
