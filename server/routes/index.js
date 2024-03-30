const express = require("express")
const router = express.Router()
const cars = require("./cars")
const sizes = require("./sizes")

router.use("/sizes", sizes)
router.use("/cars", cars)

module.exports = router