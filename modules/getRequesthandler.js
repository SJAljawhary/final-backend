'use strict';

const userModel = require('./user');

function getRequesthandler(req,res){

    let email = req.query.email;

    userModel.find({email:email} , function(error,userData){

        if(error){
            res.send(error)
        }else{
            console.log(userData);

            res.status(200).send(userData[0])
        }
    })
}
module.exports = getRequesthandler;