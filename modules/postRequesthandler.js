'use strict';

const userModel = require('./user');

function postRequesthandler(req,res){

    const {email , title , imageUrl } = req.body;

    userModel.find({email:email} , function(error,userData){

        if(error){
            res.send(error)
        }else{
            userData[0].colors.push({
                title : title ,
                imageUrl : imageUrl
            })
            userData[0].save();

            res.status(200).send(userData[0])
        }
    })
}

module.exports = postRequesthandler;