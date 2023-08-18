const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminRegisterSchema = new Schema({
    email: {
        type: "String",
        required: true
    },
    password: {
        type: "String",
        required: true
    }
})

const AdminRegister = mongoose.model('adminRegisterDetails', AdminRegisterSchema)
module.exports = AdminRegister