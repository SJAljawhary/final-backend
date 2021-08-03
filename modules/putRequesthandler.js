'use strict';

function putRequesthandler(req,res){

    let index = Number(req.params.index);

    const {email ,imageUrl , title  } = req.body;

   
    userModel.find({email:email} , function(error,userData){

        if(error){
            res.send(error)
        }else{
            userData[0].splice(index,1,{
                imageUrl : imageUrl,
                title : title
            })
            userData.save();

            res.status(200).send(userData[0])
              
}
    })}

    module.exports = putRequesthandler;