const router = require('express').Router();
const ctrl = require('../controllers/nasa')

router.get('/nasa', ctrl.nasa)

module.exports = router;