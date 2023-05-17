
const express = require('express')
const app = express();
const morgan = require('morgan');
const cors = require('cors');
// Routes
const hamburguesasRoutes = require('./routes/hamburguesa.routes.js');


// Settings
app.set("port", 4000);

// Middlewares : funciones intermedias entre una peticion y una respuesta
// Me da detalles en mi consola
app.use(morgan('dev'));
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173'
}));


// This is a librari of expres for parsing the data from the method POST. 

//my app use the routes
app.use('/api/hamburguesas',hamburguesasRoutes);

module.exports = app;