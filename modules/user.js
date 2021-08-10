'use strict';

const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  title : String,
  imageUrl : String
});

const userSchema = new mongoose.Schema({
    email : String,
    colors : [colorSchema]
  });

  const user = mongoose.model('user' , userSchema );

  module.exports = user ;