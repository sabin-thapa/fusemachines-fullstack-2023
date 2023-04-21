const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {registerValidation, loginValidation} = require('../validation')

router.post('/register', async (req, res) => {
    const {name, email, password} = req.body

    //VALIDATE DATA BEFORE POSTING
    const {error} = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //HASH THE PASSWORd
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
        name, email, password: hashedPassword
    })
    try {
        const savedUser = await user.save()
        console.log(savedUser, 'saved')
        res.send(savedUser)
    } catch(err) {
        res.status(400).send({
            msg: err.message
        })
    }
   })

router.post('/login', async(req, res) => {
    const { email, password} = req.body

    //VALIDATE DATA BEFORE POSTING
    const {error} = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //Check if the email exists 
    const user = await User.findOne({email})
    if(!user) return res.status(400).json('Email does not exist!')

    //Check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword) return res.status(400).send('Password incorrect!')

    res.send('Logged in!')
})

module.exports = router