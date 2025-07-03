const jwt = require('jsonwebtoken');
require('dotenv').config();
const authMiddleware = (req,res,next ) => {
  const authHeader = req.header('Authorization');
  if(!authHeader) return res.status(401).send('Access denied. No token provided');
  const token = authHeader.split(' ')[1];
  console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  }
  catch(e) {
    console.log(e);
  }
}

module.exports = authMiddleware;