'use strict';

const axios = require('axios');
const memory = require('./memory');

function apiColorsData(req,res){
    if(memory['searchQuery'] !== undefined){
        console.log('send data from memory');

        res.status(200).send(memory['searchQuery'])
    }else{
    axios.get('https://ltuc-asac-api.herokuapp.com/allColorData')
    .then(colorData => {
        memory['searchQuery'] = colorData.data.map(val=>{
            return new Color(val)
        });

        console.log('send data from api');

        res.status(200).send(colorData.data.map(val => new Color(val)));
    })
}
}


class Color {
    constructor(obj){
        this.title = obj.title;
        this.imageUrl =obj.imageUrl;
    }
}
    

module.exports = apiColorsData ;