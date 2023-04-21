const router = require('express').Router()
const verifier = require('../verifyToken')

router.get('/', verifier, (req, res) => {
    res.json({posts: {title: "POST", desc: "RANDOM DATA"}})
})

module.exports = router