const express = require("express")
const router = express.Router()

const controller = require("../controller/accessController")

router.post("/access", controller.create)

router.get("/access", controller.getAll)

router.delete("/access/:id", controller.deleteById)

router.post("/access/login", controller.login)

module.exports = router