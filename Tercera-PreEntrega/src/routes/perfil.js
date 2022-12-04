const { Router } = require('express')
const { getProfile } = require('../controllers/perfil-controllers')
const { isLoginActiv } = require("../helpers/loggin-middleware");


const router = Router();

router.get('/', isLoginActiv, getProfile)

module.exports = router;