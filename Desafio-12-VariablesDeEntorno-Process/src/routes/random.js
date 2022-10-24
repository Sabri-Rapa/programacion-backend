const { Router } = require('express')
const { getRandom, postRandom } = require('../controllers/random-controllers')

const router = Router();

router.get('/', getRandom)
router.post('/', postRandom)

module.exports = router;