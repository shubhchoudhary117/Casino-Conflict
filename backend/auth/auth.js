// auth.js (or any authentication-related file)
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables

const secretKey = process.env.SECRET_KEY; // Load the secret key from environment variables

// Function to generate a JWT token
function generateToken(userId) {
  const payload = { user_id: userId };
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
}
function isAuthorized(token) {
  console.log(token)

  return new Promise((resolve, reject) => {
    if (!token) {
      reject(new Error('No token provided'));
      return;
    }

    jwt.verify(token, secretKey, (err, decoded) => {
      console.log(decoded)
      if (err) {
        reject(new Error('Invalid token'));
        return;
      }

      resolve(decoded);
    });
  });
}

// Export the function to use it in your login or registration routes
module.exports = { generateToken,isAuthorized };
