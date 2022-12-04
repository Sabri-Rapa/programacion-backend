const { Router } = require("express");
const {
  getLogin,
  authenticatedUser,
  errorLogin
} = require("../controllers/login-controllers");
const passport = require("passport");

const router = Router();

router.get("/", getLogin);
router.post(
  "/",
  passport.authenticate("login", { failureRedirect: "login/errorlogin" }),
  authenticatedUser
);

router.get("/errorlogin", errorLogin);


module.exports = router;
