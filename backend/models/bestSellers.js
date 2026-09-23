const express = require('express')
const mongoose = require('mongoose')

const bestSellerSchema = mongoose.Schema({

    key:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    pair:{
        type:String,
        reuired:true,
    }

})

module.exports = mongoose.model('bestSellerModel', bestSellerSchema)