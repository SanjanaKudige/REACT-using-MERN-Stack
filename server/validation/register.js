const Validator = require('validator')

module.exports = function (data) {
    let errors = {}

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required'
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }

    if (Validator.isEmpty(data.login)) {
        errors.login = 'Login field is required'
    }

    if (!Validator.isLength(data.login, { min: 4, max: 30 })) {
        errors.login = 'Login must be 4 to 30 characters of length'
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be 6 to 30 characters of length'
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Repeat password field is required'
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match.'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}