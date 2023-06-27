const express = require("express");
const router = express.Router();


const registerController = require("../controller/register.js");

router.get("/",registerController.registerPage)
router.post("/", registerController.register);

module.exports = router;
