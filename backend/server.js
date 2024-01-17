const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 8000;

const app = express();

// Send raw json
app.use(express.json());
// Urlencoded form
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome Help Desk API' });
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
