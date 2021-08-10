'use strict';

const userModel = require('./user');

function deleteRequestHandler(req,res){

    let index = req.params.index;

    let email = req.query.email;

   
    userModel.find({email:email} , function(error,userData){

        if(error){
            res.send(error)
        }else{
            userData[0].colors.splice(index,1)
            userData[0].save();

            res.status(200).send(userData[0].colors)
              
}
    })}

    module.exports = deleteRequestHandler;