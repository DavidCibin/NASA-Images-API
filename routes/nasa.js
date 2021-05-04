const router = require('express').Router();
const ctrl = require('../controllers/nasa')


router.get('/', ctrl.nasaRandom)
router.get('/nasa-daily', ctrl.nasaDaily)
router.get('/nasa-mars', ctrl.nasaMars)
router.get('/nasa-mydate/:date', ctrl.myDate)
// router.post('/nasa-mydate', ctrl.myDatePost)

module.exports = router;

