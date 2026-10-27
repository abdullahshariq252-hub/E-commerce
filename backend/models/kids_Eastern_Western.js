const express = require('express');
const mongoose = require('mongoose');

const kidsEasternWesternSchema = new mongoose.Schema({
    name:{
        type:String,
        enum:['Boys', 'Girls'],
        required:true
    },
    pair:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:['Eastern', 'Western'],
        required:true       
    }
})

module.exports = mongoose.model('KidsEasternWesternModel', kidsEasternWesternSchema)