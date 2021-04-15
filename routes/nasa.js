const router = require('express').Router();
const ctrl = require('../controllers/nasa')

router.get('/nasa', ctrl.nasa)
// router.get('/nasa', ctrl.nasaDaily)
// router.get('/nasa', ctrl.nasaMars)

module.exports = router;