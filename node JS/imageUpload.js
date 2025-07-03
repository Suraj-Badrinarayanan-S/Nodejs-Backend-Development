const express = require('express');
const path = require('path');
const app = express();
const bookRoutes = require('./routes/uploadRoutes');

app.set('view engine', 'ejs');

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use('/api', bookRoutes);

app.get('/', (req, res) => {
  res.render('upload');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
