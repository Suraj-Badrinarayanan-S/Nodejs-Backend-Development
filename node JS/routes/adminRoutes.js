const express = require('express');
const router = express();
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware')
router.get('/admin',authMiddleware, adminMiddleware, (req,res)=> {
  res.send('Welcome to admin page');
});

module.exports = router;