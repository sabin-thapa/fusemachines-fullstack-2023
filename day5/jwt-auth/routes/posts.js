const router = require('express').Router()
const verifier = require('../verifyToken')

router.get('/', verifier, (req, res) => {
    res.send(req.user)
})

module.exports = router