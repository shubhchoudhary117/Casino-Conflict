const express = require('express');
const Joi = require('joi');
const router = express.Router();
const ClientModel = require('../models/client');
const ProviderModel = require('../models/provider')
const paginate = require('../pagination/pagination');

const clientSchema = Joi.object({
  name: Joi.string().min(3).required(),
  reference: Joi.string().required(),
  password: Joi.string().required(),
  contactNo: Joi.string().min(10).max(11).regex(/^\d+$/).required(),
  share: Joi.number().required(),


})
const generateClientCode = async () => {
  try {
    // Find the latest provider in the database
    const latestProvider = await ClientModel.findOne().sort({ code: -1 });

    if (latestProvider) {
      // Extract the numeric part of the code and increment it
      const latestCodeNumericPart = parseInt(latestProvider.code.replace(/\D/g, ''), 10);
      const newCodeNumericPart = latestCodeNumericPart + 1;

      // Generate the new code by combining the prefix and the incremented numeric part
      const newClientCode = `C${newCodeNumericPart}`;

      return newClientCode;
    } else {
      // If no provider exists, start with P1
      return 'C1';
    }
  } catch (error) {
    throw new Error(`Error generating provider code: ${error.message}`);
  }
};

const createClientRecords = async (req, res) => {
  try{
  const { providerId } = req.params;
  if (!providerId) {
    return res.status(404).json({ error: 'Provider not found' });
  }
  const { error } = clientSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  const { name, reference, password, contactNo,share } = req.body;

  const code = await generateClientCode();

  const newClient = new ClientModel({
    code:code,
    providerId: providerId, // Associate the client with the provider using the providerId
    name, reference, password, contactNo,share
  });
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

const getClientRecordsByProviderId = async (req, res) => {
 try{
   var data={};
  const { providerId } = req.params;
  const clients = await ClientModel.find({ providerId });
  if (clients.length === 0) {
    return res.json({ message: 'No clients found for the specified provider' });
  }
  console.log(clients.length)
  for(var i=0; i<clients.length; i++){
    data = clients[i];
  }
  res.json({ data:clients });


} catch (error) {
    // Handle errors and send an error response
    res.status(500).json({ error: error.message });
  }
};


const getAllClientsRecords = async (req, res) => {
  try {
    const data = await paginate(ClientModel, req);

    if (data.content.length === 0) {
      return res.json({ message: 'No clients found for the specified provider' });
    }

    res.json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getSingleClient = async (req,res) => {
  try {
    const { clientId } = req.params;
    console.log(clientId)
    // Validate the client ID (you might want to use a library like mongoose.Types.ObjectId.isValid)
    if (!clientId) {
      return res.status(400).json({ error: 'Invalid client ID' });
    }

    // Fetch the client by ID
    const client = await ClientModel.findById(clientId);

    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.json({ client });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    const { error } = clientSchema.validate(req.body);
    console.log(req.body)
    console.log(clientId)

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { name, reference, password, contactNo, share } = req.body;

    const client = await ClientModel.findById(clientId);

    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }

    client.name = name;
    client.reference = reference;
    client.password = password;
    client.contactNo = contactNo;
    client.share = share;


    // Save the updated client
    const updatedClient = await client.save();

    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




module.exports = { createClientRecords, getClientRecordsByProviderId,getAllClientsRecords,updateClient,getSingleClient }
