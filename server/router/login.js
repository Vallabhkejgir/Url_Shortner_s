const express = require('express');
const router = express.Router();
const loginController = require('../controller/login.js');


router.get('/', loginController.getLoginPage);

router.post('/', loginController.submitLogin);

module.exports = router;
