const {body} = require('express-validator');
module.exports.registerValidations = [
    body('name').not().isEmpty().trim().escape().withMessage('Name is required'),
    body('email').isEmail().trim().escape().withMessage('Email is required'),
    body('password').isLength({min:3}).withMessage('Password should be greater or equal than 3 characters')
]

module.exports.loginValidations = [
    body('email').isEmail().trim().escape().withMessage('Email is required'),
    body('password').not().isEmpty().withMessage('Password is required')
]