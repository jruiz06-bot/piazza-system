const express = require('express');
const connectDB = require('./utils/db');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
