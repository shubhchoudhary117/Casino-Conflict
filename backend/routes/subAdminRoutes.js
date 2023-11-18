const express = require('express');
const router = express.Router();
const subAdminController = require('../controllers/subAdminController');

// Create a new admin
router.post('/subadmins', subAdminController.createSubAdmin);

// Get all admins
router.get('/subadmins', subAdminController.getAllSubAdmins);

// Get a specific admin by ID
router.get('/subadmins/:id', subAdminController.getSubAdminById);

// Update a specific admin by ID
router.put('/subadmins/:id', subAdminController.updateSubAdmin);

// Delete a specific admin by ID
router.delete('/subadmins/:id', subAdminController.deleteSubAdmin);

module.exports = router;
