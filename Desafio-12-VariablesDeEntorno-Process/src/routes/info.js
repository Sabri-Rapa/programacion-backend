const { Router } = require('express')
const { getInfoProcess } = require('../controllers/infoProcess-controllers')

const router = Router();

router.get('/', getInfoProcess)

module.exports = router;