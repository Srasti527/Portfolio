// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api/contact', require('./routes/contact'));

// // Basic route for testing
// app.get('/', (req, res) => {
//   res.send('Portfolio API is running...');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'https://portfolio-lime-chi-70.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// =========================
// MongoDB Connection (FIXED)
// =========================
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

// =========================
// Routes
// =========================
app.use('/api/contact', require('./routes/contact'));

// =========================
// Test Route
// =========================
app.get('/', (req, res) => {
  res.send('Portfolio API is running 🚀');
});

// =========================
// Start Server
// =========================
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});