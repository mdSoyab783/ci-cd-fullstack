require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'API is running' });
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/test')
    .then(()=> {
      app.listen(PORT, () => console.log(`Server running on ${PORT}`));
    })
    .catch(err => console.error('MongoDB connect error', err));
}

module.exports = app; // for tests
