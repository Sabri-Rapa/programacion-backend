const { Router } = require('express')
const { getMokeProducts } = require('../controllers/mokeProducts')

const router = Router()

router.get('/', getMokeProducts)

module.exports = router;