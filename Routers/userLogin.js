const express = require("express")
const router = express.Router()
const UserLoginDetailsController = require("../Controllers/user-login-controller")

router.post("/", UserLoginDetailsController.createUserRegistration)
router.get("/", UserLoginDetailsController.getUserLoginDetails)
module.exports = router