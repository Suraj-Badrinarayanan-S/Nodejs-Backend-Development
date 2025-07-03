require('dotenv').config()
const bookRoutes = require('./routes/bookRoutes');
const express = require('express');
const connectDB = require('./database/db');
const connectDBAuth = require('./database/dbAuth');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
connectDBAuth();
app.use(express.json());

app.use('/api/books', bookRoutes);
app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
})