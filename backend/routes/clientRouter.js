
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const authMiddleware = require('../middleware/auth');

// router.use(authMiddleware);
router.post('/:providerId', clientController.createClientRecords);
router.get('/:providerId',clientController.getClientRecordsByProviderId);
router.get('/page/:page',clientController.getAllClientsRecords);
router.put('/:clientId', clientController.updateClient);
router.get('/data/:clientId',clientController.getSingleClient)

module.exports = router;
