const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserRegisterSchema = new Schema({
    email: {
        type: "String",
        required: true
    },
    password: {
        type: "String",
        required: true
    }
})

const UserRegister = mongoose.model('userRegisterDetails', UserRegisterSchema)
module.exports = UserRegister