const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminRegisterSchema = new Schema({
    email: {
        type: "String",
        unique: true,
        required: true
    },
    password: {
        type: "String",
        required: true
    },
    token:{
        type: "String"
    }
})

const AdminRegister = mongoose.model('adminRegisterDetails', AdminRegisterSchema)
module.exports = AdminRegister