const express = require('express');
const {getAllBooks, getBookByID, addBook, updateBookByID, deleteBookByID} = require('../controllers/bookController.js');
const router = express.Router();

router.get('/get', getAllBooks);
router.get('/get/:id', getBookByID);
router.post('/add', addBook);
router.put('/update/:id', updateBookByID);
router.delete('/delete/:id', deleteBookByID);

module.exports = router;