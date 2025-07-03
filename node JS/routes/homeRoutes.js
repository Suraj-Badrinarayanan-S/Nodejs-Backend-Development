const express = require('express');
const router = express();
const authMiddleware = require('../middleware/authMiddleware')
router.get('/welcome',authMiddleware, (req,res)=> {
  const {username, userId, role} = req.user;
  res.send('welcome', {username, userId, role});
  
});

module.exports = router;