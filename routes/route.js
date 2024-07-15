const express = require('express');
const router = express.Router();
const { login, signup } = require('../controller/controller');

// Define the login route
router.post('/login', login);
router.post('/signup', signup)

module.exports = router;
