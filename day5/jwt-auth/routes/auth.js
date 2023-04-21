const router = require('express').Router()
const User = require('../models/User')


//VALIDATION
const joi = require('@hapi/joi')

const validationSchema = {
    name: joi.string().min(6).required(),
    email: joi.string().email().min(6).required(),
    password: joi.string().min(6).required()
}

router.post('/register', async (req, res) => {

    //VALIDATE DATA BEFORE POSTING
    const {error} = joi.validate(req.body, validationSchema)
    if (error) return res.status(400).send(error.details[0].message)

    const {name, email, password} = req.body
    const user = new User({
        name, email, password
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

// router.get('/register', async(req, res) => {
//     try {
//         const users = await User.find({})
//         res.send(users)
//     } catch (error) {
//         res.status(400).send({msg: error.message})
//     }
// })

router.post('/login', (req, res) => {
    res.send('Login')
})

module.exports = router