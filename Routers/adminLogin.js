const express = require("express")
const router = express.Router()
const AdminLoginDetailsController = require("../Controllers/admin-login-controller")

router.post("/", AdminLoginDetailsController.createAdminRegistration)
router.get("/", AdminLoginDetailsController.getAdminLoginDetails)
module.exports = router