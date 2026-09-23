const express = require('express');
const mongoose = require('mongoose');

const menPoloSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true
  },
  pair:{
    type:String,
    required:true
  },
  device:{
    enum:['mobile','desktop'],
    type:String,
    required:true
  }
});

module.exports = mongoose.model('MenPolo', menPoloSchema);