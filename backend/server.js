const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors({origin: 'https://wondrous-snickerdoodle-9281f9.netlify.app/'})); // Allow requests from the frontend domain  
app.use(express.json());

// Routes
const questionRoutes = require('./routes/questionRoutes');
app.use('/api/questions', questionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// This code initializes an Express server, connects to a MongoDB database, and sets up routes for handling quiz questions.