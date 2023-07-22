const express = require("express")
const router = express.Router()

const controller = require("../controller/mediaController")


router.get("/all", controller.getAllMedia)

router.get("/:id", controller.getById)

router.get("/type", controller.getMediaByType)

router.post("/add", controller.addNewMedia)

router.patch("/:id", controller.updateMediaById)

router.delete("/:id", controller.deleteById)

module.exports = router