const SubAdmin = require('../models/subadmin');

// Create a new admin
exports.createSubAdmin = async (req, res) => {
  try {
    console.log(req.body)
    const newSubAdmin = new SubAdmin(req.body);
    const savedSubAdmin = await newSubAdmin.save();
    res.status(201).json(savedSubAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all admins
exports.getAllSubAdmins = async (req, res) => {
  try {
    const subAdmins = await SubAdmin.find();
    res.json(subAdmins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific admin by ID
exports.getSubAdminById = async (req, res) => {
  const subAdminId = req.params.id;
  try {
    const subAdmin = await SubAdmin.findById(subAdminId);
    if (!subAdmin) {
      return res.status(404).json({ error: 'SubAdmin not found' });
    }
    res.json(subAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a specific admin by ID
exports.updateSubAdmin = async (req, res) => {
  const subAdminId = req.params.id;
  try {
    const updatedSubAdmin = await SubAdmin.findByIdAndUpdate(subAdminId, req.body, {
      new: true,
    });
    if (!updatedSubAdmin) {
      return res.status(404).json({ error: 'SubAdmin not found' });
    }
    res.json(updatedSubAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a specific admin by ID
exports.deleteSubAdmin = async (req, res) => {
  const subAdminId = req.params.id;
  try {
    const deletedSubAdmin = await SubAdmin.findByIdAndRemove(subAdminId);
    if (!deletedSubAdmin) {
      return res.status(404).json({ error: 'SubAdmin not found' });
    }
    res.json(deletedSubAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
