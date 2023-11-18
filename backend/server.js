const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth=require("./middleware/auth.js")
require("dotenv").config();
require('./helpers/init_mongodb')
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const createProviderRoutes = require('./routes/providerRouter');
const subAdminRouter = require('./routes/subAdminRoutes');
const clientRoutes = require('./routes/clientRouter');

app.use(express.json());
app.use('/login', userRoutes);
app.use('/register',registrationRoutes)
app.use('/api',auth,createProviderRoutes);
app.use('/admin',subAdminRouter);
app.use('/client',clientRoutes);
app.use(bodyParser.json());
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });

})
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});


