const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
  providerId:String,
  id: Number,
  code: String,
  name: String,
  reference: String,
  contactNo: String,
  password: String,
  passwordHash: String,
  joiningDate: Date,
  status: Boolean,
  casinoCheck: Boolean,
  mc: Number,
  sc: Number,
  cc: Number,
  share: Number,
  icShare: Number,
  shareSub: Number,
  msSub: Number,
  icShareSub: Number,

});

const ClientModel = mongoose.model('ClientModel', yourSchema);

module.exports = ClientModel;
