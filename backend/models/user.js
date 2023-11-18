// models/user.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  code: { type: String, required: true,unique:true },
  password: { type: String, required: true },
  name: { type: String },
  coin: { type: Number },
  role: {
    type: String,
    enum: ['ADMIN', 'PROVIDER', 'CLIENT'],
    required: true,
  },
});
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
