const { Router } = require("express");
const {
  getSignup,
  signupUser,
  errorSignup,
} = require("../controllers/signup-controllers");
const passport = require("passport");
const {upload} = require("../helpers/multer-middleware");

const router = Router();

router.get("/", getSignup);
router.post(
  "/",
  upload,
  passport.authenticate("signup", { failureRedirect: "signup/errorsignup" }),
  signupUser
);

router.get("/errorsignup", errorSignup);

module.exports = router;
