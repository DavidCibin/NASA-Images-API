const router = require('express').Router();
const ctrl = require('../controllers/nasa')


router.get('/', ctrl.nasaRandom)
router.get('/nasa-daily', ctrl.nasaDaily)
router.get('/nasa-mars', ctrl.nasaMars)
// router.put('/nasa-daily', ctrl.update)

router.post("/customDate", async (req, res) => {
  console.log(req.body.date)
  const customDate = req.body.date
  await axios({
    method: "GET",
    url: `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}&date=${customDate}`,
    withCredentials: false
  }).then((response) => {
    res.send(response.image)
  })
})

module.exports = router;