'use strict';

function homehandler(req,res){
    res.status(200).send('Hello in my route home');

}

module.exports = homehandler ;