const mongoose = require('mongoose');

const subAdminSchema = new mongoose.Schema({
  code: String,
  name: String,
  contactNo: String,
  reference: String,
  joiningDate: String,
  password: String,
  passwordHash: String,
  status: Boolean,
  casinoCheck: Boolean,
  icCheck: Boolean,
  currentLimit: Number,
  mc: Number,
  sc: Number,
  cc: Number,
  share: Number,
  mobileShare: Number,
  icShare: Number,
  reset: Boolean,
  limitUpdate: Boolean,
  domainId: Number,
  adminId: Number,
  cshare: Number,
});

const SubAdmin = mongoose.model('SubAdmin', subAdminSchema);

module.exports = SubAdmin;
