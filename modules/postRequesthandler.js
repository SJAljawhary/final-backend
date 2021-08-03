'use strict';

const userModel = require('./user');

function postRequesthandler(req,res){

    const {email , imageUrl , title } = req.body;

    userModel.find({email:email} , function(error,userData){

        if(error){
            res.send(error)
        }else{
            userData.push({
                title : title ,
                imageUrl : imageUrl
            })
            userData.save();

            res.status(200).send(userData[0])
        }
    })
}

module.exports = postRequesthandler;