const express = require('express');
const router = express.Router();
const userController = require('../controllers/registrationController'); // Import your user controller

// Define the registration route
router.post('/', userController.register);

module.exports = router;
