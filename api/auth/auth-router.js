const router = require('express').Router()
const bc = require('bcryptjs')

const Users = require('../users/user-model.js')

router.post('/register', (req, res) => {
    const user = req.body
    const hash = bc.hashSync(req.body.password, 8)
    user.password = hash

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error creating user.' })
        })
})

module.exports = router