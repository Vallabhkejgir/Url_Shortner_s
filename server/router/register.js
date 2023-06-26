const express = require("express");
const router = express.Router();

// Import the register controller
const registerController = require("../controller/register.js");

// Define the register route
router.get("/",registerController.registerPage)
router.post("/", registerController.register);

// Export the router
module.exports = router;
