const authUser = (req, res, next) => {
    if(!req.user) {
        res.status(403)
        return res.send('You are not logged in!')
    } 
    next()
}

module.exports = authUser