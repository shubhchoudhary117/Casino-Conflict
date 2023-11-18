const Joi = require('joi');
const bcrypt = require('bcrypt');
const ProviderModel = require('../models/provider');
const paginate = require('../pagination/pagination');

// Create a new record
let codeCount = 1;
const providerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  reference: Joi.string().required(),
  password: Joi.string().required(),
  contactNo: Joi.string().min(10).max(11).regex(/^\d+$/).required(),
  share: Joi.number().required(),
})

const generateProviderCode = async () => {
  try {
    // Find the latest provider in the database
    const latestProvider = await ProviderModel.findOne().sort({ code: -1 });

    if (latestProvider) {
      // Extract the numeric part of the code and increment it
      const latestCodeNumericPart = parseInt(latestProvider.code.replace(/\D/g, ''), 10);
      const newCodeNumericPart = latestCodeNumericPart + 1;

      // Generate the new code by combining the prefix and the incremented numeric part
      const newProviderCode = `P${newCodeNumericPart}`;

      return newProviderCode;
    } else {
      // If no provider exists, start with P1
      return 'P1';
    }
  } catch (error) {
    throw new Error(`Error generating provider code: ${error.message}`);
  }
};

const createProviderRecord = async (req, res) => {
  try {
   
    const { error } = providerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    // const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // req.body.password = hashedPassword;
    const code = await generateProviderCode();
    req.body.code = code;
    const newRecord = new ProviderModel(req.body);
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProvider = async (req,res)=>{
  try {
    const data = await paginate(ProviderModel, req);
    res.json({data:data});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getProviderById = async (req, res) => {
  try {
    const providerId = req.params.id; // Get the provider ID from the route parameter
    console.log(providerId)
    const provider = await ProviderModel.findById(providerId);
    if (!provider) {
      return res.status(404).json({ error: 'Provider not found' });
    }
    res.json({data:provider});
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateProvider = async (req,res)=>{
  try {
    const providerId = req.params.providerId;
    const provider = await ProviderModel.findById(providerId);

    if (!provider) {
      return res.status(404).json({ error: 'Provider not found' });
    }

    // Define an array of fields that should not be updated
    const fieldsToExclude = ['_id', '__v', 'code'];

    // Iterate over the fields in the request body and update the provider object
    for (const field in req.body) {
      if (!fieldsToExclude.includes(field)) {
        provider[field] = req.body[field];
      }
    }

    const updatedProvider = await provider.save();
    res.json(updatedProvider);
  }catch(error) {
    res.status(400).json({ error: error.message });
  }

}
module.exports = {
  createProviderRecord,getProvider,updateProvider,getProviderById
};
