const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY; // Replace with your actual secret key
const UserModel = require('../models/user');
const ProviderModel = require('../models/provider');

exports.login = async (req, res) => {
  const { code, password } = req.body;

  try {
    const user = await UserModel.findOne({ code });
    if (!user) {
      return res.status(404).json({ code: 'Code not found' });
    }
    if (user) {
      // For user login, compare the password using bcrypt
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        return res.status(401).json({ password: 'Invalid password' });
      }

      const token = jwt.sign({ sub: user.code }, secretKey, { expiresIn: '7d' });

      return res.json({
        name: user.name,
        code: user.code,
        token,
        role: 'ADMIN',
        msg: 'Login Success',
        status: true,
      });
    }

    // Check if a user with the given code exists in the provider database
    const provider = await ProviderModel.findOne({ code });
    console.log(provider._id,provider.password,password)
    if (provider) {
      // For provider login, compare the password without encryption
      if (password != provider.password) {
        return res.status(401).json({ msg: 'Invalid password' });
      }

      const token = jwt.sign({ sub: provider.code }, secretKey, { expiresIn: '7d' });

      return res.json({
        name: provider.name,
        code: provider.code,
        token,
        providerId:provider._id,
        role: 'PROVIDER',
        msg: 'Login Success',
        status: true,
      });
    }

    return res.status(401).json({ msg: 'User not found' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
};
