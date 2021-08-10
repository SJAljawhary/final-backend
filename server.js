'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const homehandler = require('./modules/homehandler');
const handler = require('./modules/handler');

const axios = require('axios');
const memory = require('./modules/memory');

const apiColorsData = require('./modules/apiColorsData');
const seedingData = require('./modules/seedingData');
const getRequesthandler = require('./modules/getRequesthandler');
const postRequesthandler = require('./modules/postRequesthandler');
const putRequesthandler = require('./modules/putRequesthandler');
const deleteRequestHandler = require('./modules/deleteRequestHandler');



require ('dotenv').config();

const server = express();
server.use(cors());

server.use(express.json());

const PORT = process.env.PORT;





mongoose.connect(`${process.env.MONGOOSE_DB}`, {useNewUrlParser: true, useUnifiedTopology: true});

// seedingData();


//http://localhost:3002/
server.get('/', homehandler);

//http://localhost:3002/allColorData
server.get('/allColorData', apiColorsData);



// http://localhost:3002/getcolor?email=sndjehad@gmail.com

server.get('/getcolor' , getRequesthandler);


server.post('/postcolor' ,postRequesthandler );

server.delete('/deletecolor/:index' , deleteRequestHandler);

server.put('/putcolor/:index' ,putRequesthandler );



server.get('*' , handler);

server.listen(PORT , () => {
    console.log(`Listening on port ${PORT}`);
});