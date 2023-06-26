const express = require('express');
const router = express.Router();
const loginController = require('../controller/login.js');

// Handle GET request for the login page
router.get('/', loginController.getLoginPage);

// Handle POST request for submitting the login form
router.post('/', loginController.submitLogin);

module.exports = router;
