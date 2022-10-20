const { Router } = require('express')
const { getLogin, registerUser } = require('../controllers/login-controllers')

const router = Router();

router.get('/', getLogin)
router.post('/', registerUser)

module.exports = router;