const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
  id: Number,
  code: {
    type: String,
    unique: true, // Ensures uniqueness
    required: true,
  },
  name: String,
  reference: String,
  contactNo: String,
  password: String,
  passwordHash: String,
  joiningDate: Date,
  status: Boolean,
  casinoCheck: Boolean,
  icCheck: Boolean,
  mc: Number,
  sc: Number,
  cc: Number,
  share: Number,
  mobileShare: Number,
  icShare: Number,
  currentLimit: Number,
  subId: Number,
  mcSub: Number,
  scSub: Number,
  ccSub: Number,
  shareSub: Number,
  msSub: Number,
  icShareSub: Number,
  reset: Boolean,
  cshareSub: Number,
  cshare: Number,
});

const ProviderModel = mongoose.model('ProviderModel', yourSchema);

module.exports = ProviderModel;
