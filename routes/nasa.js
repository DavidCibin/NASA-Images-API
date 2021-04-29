const router = require('express').Router();
const ctrl = require('../controllers/nasa')

// router.get('/nasa', ctrl.nasa)
router.get('/', ctrl.nasaRandom)
router.get('/nasa-daily', ctrl.nasaDaily)
router.get('/nasa-mars', ctrl.nasaMars)

module.exports = router;