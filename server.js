'use strict';

const handler = require('./modules/handler');
const homehandler = require('./modules/homehandler');
const memory = require('./modules/memory');
const getRequesthandler = require('./modules/getRequesthandler');
const postRequesthandler = require('./modules/postRequesthandler');
const putRequesthandler = require('./modules/putRequesthandler');
const seedingData = require('./modules/seedingData')



require ('dotenv').config();

const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());

server.use(express.json());

const PORT = process.env.PORT;

const mongoose = require('mongoose');
const axios = require('axios');
const apiColorsData = require('./modules/apiColorsData');

mongoose.connect('mongodb://localhost:27017/colors', {useNewUrlParser: true, useUnifiedTopology: true});

server.get('/', homehandler);



server.get('/allColorData', apiColorsData);
server.get('/getcolor' , getRequesthandler);

// seedingData();


server.post('/postcolor' ,postRequesthandler );
server.put('putcolor' ,putRequesthandler );





server.get('*' , handler);

server.listen(PORT , () => {
    console.log(`Listening on port ${PORT}`);
});