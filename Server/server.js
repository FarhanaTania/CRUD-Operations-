import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js'; // Adjust the path if necessary
import userRoutes from './routes/userRoutes.js'; // Adjust the path if necessary

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected to Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the API!'); // You can customize this message
});

// Use contact and user routes
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});