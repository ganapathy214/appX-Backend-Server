const express = require("express")
const cors=require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/appX_project').then(() => {
    console.log("Mongodb connected...");
}).catch((err) => {
    console.log(err.message);
})

const adminLoginRoute = require("./Routers/adminLogin")
app.use("/admin/login", adminLoginRoute)

const userLoginRoute = require("./Routers/userLogin")
app.use("/user/login", userLoginRoute)

const createEventRoute=require("./Routers/createEvent")
app.use("/user/createEvent",createEventRoute)
app.listen(4000, () => {
    console.log("I'm from 4000 port");
})