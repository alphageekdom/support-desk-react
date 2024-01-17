const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome Help Desk API' });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
