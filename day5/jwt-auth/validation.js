//VALIDATION
const joi = require('@hapi/joi')

//Register validation
const registerValidation = (data) => {
    const validationSchema = joi.object({
        name: joi.string().min(6).required(),
        email: joi.string().email().min(6).required(),
        password: joi.string().min(6).required()
    })
    return validationSchema.validate(data)
}

//Login Validation
const loginValidation = (data) => {
    const validationSchema = joi.object({
        email: joi.string().email().min(6).required(),
        password: joi.string().min(6).required()
    })
    return validationSchema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation