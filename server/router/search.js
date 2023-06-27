const express = require('express');
const router = express.Router();
const searchController = require('../controller/search.js');
const utils = require("../utils/verifyToken");


router.get('/',utils.verifyToken, searchController.search);

module.exports = router;
