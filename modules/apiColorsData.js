'use strict';

const axios = require('axios');
const memory = require('./memory');

function apiColorsData(req,res){
    if(memory['searchQuery'] !== undefined){
        console.log('send data from memory');

        res.status(200).send(memory['searchQuery'] )
    }else{
    axios.get('https://ltuc-asac-api.herokuapp.com/allColorData')
    .then(colorData => {
        memory['searchQuery'] = colorData.data;

        console.log('send data from api');

        res.status(200).send(colorData.data);
    })
}
}

module.exports = apiColorsData ;