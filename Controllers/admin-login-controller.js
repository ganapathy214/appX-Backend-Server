const createErrors = require("http-errors")
const Register = require("../Models/admin-login")

module.exports = {
    createAdminRegistration:
     (req, res, next) => {
        console.log(req.body);
        const register = new Register({
            email: req.body.email,
            password: req.body.password
        })
        register.save()
            .then((result) => {
                console.log(result);
                res.send(result)
            })
            .catch((error) => {
                if (error.name === "ValidationError") {
                    next(createErrors(422, error.message))
                    return
                }
                next(error)
            })
    },
    
    getAdminLoginDetails: async (req, res, next) => {
        try {
            const result = await Register.find({}, { __v: 0 })
            res.send(result)
        } catch (error) {
            if (error.message.indexOf("Cast to ObjectId failed") !== -1) {
                next(createErrors.BadRequest("User not exists"));
            }
        }
    }
}