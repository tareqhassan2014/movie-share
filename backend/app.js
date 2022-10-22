require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./util/connectDB');
const AppError = require('./util/AppError');
const globalErrorHandler = require('./middleware/globalErrorHandler');
const undefinedRoutes = require('./util/undefinedRoutes');
const path = require('path');

// connect to database
connectDB();

// initialize express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// use routes
app.use('/order', require('./routes/order'));
app.use('/movie', require('./routes/movie'));

//entry point
app.get('/', (req, res) => {
    // read file from documentation folder and send it to client
    const file = path.join(__dirname, 'documentation', 'Documentation.pdf');

    res.sendFile(file);
});

// handle undefined routes
app.all('*', undefinedRoutes);

// global error handler
app.use(globalErrorHandler);

module.exports = app;
