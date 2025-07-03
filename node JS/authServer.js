require('dotenv').config()
const authRoutes = require('./routes/authRoutes');
const homeRoutes = require('./routes/homeRoutes');
const adminRoutes = require('./routes/adminRoutes');
const express = require('express');
const connectDBAuth = require('./database/dbAuth');

const app = express();
const PORT = process.env.PORT || 3000;

connectDBAuth();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/home', adminRoutes);
app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
})