const jwt = require('jsonwebtoken')

const authVerifier = (req, res, next) => {
    const token = req.header('auth-token')
    if(!token) res.status(401).send('Access Denied')

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
    } catch (error) {
        res.status(400).send('Invalid token')
    }

    next()
}

module.exports = authVerifier