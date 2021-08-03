'use strict';

const userModel = require('./user');

function seedingData(){
    const sondos = new userModel({

        email:'sndjehad@gmail.com',
        colors : [{
            title : 'Purple',
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwT2oNk3Cy82BjzTJQqYmpnIsJXH3YeNUlzo0k3HGQRKj0e2V_41v0PwGJzUK_dKsvRV0&usqp=CAU'
        }]
    })
    sondos.save();
}

module.exports = seedingData;