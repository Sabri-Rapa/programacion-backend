const { Router } = require('express')
const { getForm } = require('../controllers/formProducts-controllers')
const { isLoginActiv } = require("../helpers/loggin-middleware");


const router = Router();

router.get('/', isLoginActiv, getForm)

module.exports = router;