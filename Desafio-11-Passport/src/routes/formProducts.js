const { Router } = require('express')
const { getForm } = require('../controllers/formProducts-controllers')
const { isLoginActiv } = require("../helpers/middlewares");


const router = Router();

router.get('/', isLoginActiv, getForm)

module.exports = router;