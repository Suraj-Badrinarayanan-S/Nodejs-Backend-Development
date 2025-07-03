const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');

router.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('Image uploaded successfully');
});

module.exports = router;
