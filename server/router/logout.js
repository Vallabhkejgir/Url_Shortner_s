const express = require("express");
const router = express.Router();
const utils = require("../utils/verifyToken");
// Import the logout controller
const logoutController = require("../controller/logout");

// Define the logout route
router.post("/",utils.verifyToken, logoutController);

// Export the router
module.exports = router;
