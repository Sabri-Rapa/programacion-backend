const { Router } = require('express')
const { getLogout } = require('../controllers/logout-controllers')

const router = Router();

router.get('/', getLogout)


module.exports = router;