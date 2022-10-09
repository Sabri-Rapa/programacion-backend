const { Router } = require("express");
const { loginController, viewPageLogin, logoutController } = require("../controllers/sesion");

const router = Router();

router.get('/login', viewPageLogin)
router.post("/login", loginController);

router.get('/logout', logoutController)


// router.post("/login", loginController);


module.exports = router;
