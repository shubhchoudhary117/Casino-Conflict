
const express = require('express');
const router = express.Router();
const ProviderController = require('../controllers/providerController'); // Import your user controller
const AuthorizationError = require('../errorhandller/authorization-error');
const auth = require('../auth/auth')
// Define the registration route

router.post('/createprovider', ProviderController.createProviderRecord);
router.get('/getProvider/:page', ProviderController.getProvider);
router.get('/getproviderbyid/:id', ProviderController.getProviderById);
router.put('/providers/:providerId', ProviderController.updateProvider);

// async (req, res) => {
//   const authToken = req.headers['authorization'];
//   console.log(authToken)
//   try {
//     const decoded = await auth.isAuthorized(authToken);
//     console.log(decoded)
//     ProviderController.getProvider(req, res);
//   } catch (error) {
//     if (error.constructor.name === 'AuthorizationError') {
//       res.status(403).json({ error: error.message });
//     }else{
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//     // Handle any potential errors from the controller
//   }
// }
// );

module.exports = router;
