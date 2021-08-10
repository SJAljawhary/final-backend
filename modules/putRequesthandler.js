'use strict';

const userModel = require('./user');


function putRequesthandler(req,res){

    let index = Number(req.params.index);

    const {email ,title ,   imageUrl} = req.body;

   
    userModel.find({email:email} , function(error,userData){

        if(error){
            res.send(error)
        }else{
            userData[0].colors.splice(index,1,{
                title : title,
                imageUrl : imageUrl
            })
            userData[0].save();

            res.status(200).send(userData[0].colors)
              
}
    })}

    module.exports = putRequesthandler;