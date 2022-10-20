const { Router } = require('express')
const { getHome } = require('../controllers/home-controllers')
const { isLoginActiv } = require("../helpers/middlewares");


const router = Router();

router.get('/', isLoginActiv, getHome)

module.exports = router;