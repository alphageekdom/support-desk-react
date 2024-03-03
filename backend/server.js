const path = require('path');
const express = require('express');
require('colors');
require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

const app = express();

// Send raw json
app.use(express.json());
// Urlencoded form
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

// Server Frontend
if (process.env.NODE_ENV === 'production') {
  // Set Build Folder as Static
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
  );
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome Help Desk API' });
  });
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
