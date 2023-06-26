const express = require("express");
const router = express.Router();
const utils = require("../utils/verifyToken");
const dashboardController = require("../controller/dashboard.js");
// Handle GET request for the dashboard page
router.get("/", utils.verifyToken, dashboardController.dashboard);
router.post("/shortUrls", utils.verifyToken, dashboardController.addUrl);
router.get("/redirect/:shortUrl", utils.verifyToken, dashboardController.increase);
module.exports = router;
