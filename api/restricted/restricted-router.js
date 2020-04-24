const router = require('express').Router()
const restricted = require('../../middleware/restricted.js')

router.use(restricted)

router.get('/something', (req, res) => {
    res.status(200).json({ message: 'You found something restricted!' })
})

module.exports = router