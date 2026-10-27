const express = require('express');

const moongose = require('mongoose');

const kidsSchema = new moongose.Schema({
    name:{
        type:String,
        enum:['Boys', 'Girls'],
        required:true
    },
    pair:{
        type:String,
        required:true
    },
    device:{
        type:String,
        enum:['Mobile', 'Desktop'],
        required:true
    }

})

module.exports = moongose.model('Kids', kidsSchema)