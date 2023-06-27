const express = require("express");
const router = express.Router();
const utils = require("../utils/verifyToken");

const logoutController = require("../controller/logout");

router.post("/",utils.verifyToken, logoutController);

module.exports = router;
