require('./config/config');

const express = require('express');
// Using Node.js `require()`
const mongoose = require('mongoose');

// Using ES6 imports
//import mongoose from 'mongoose';

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Configuración global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Base de datos oline xP');
    }
});

// mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
//     if (err) {
//         throw err;
//     } else {

//         console.log('Base de datos online');
//     }
// });

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});