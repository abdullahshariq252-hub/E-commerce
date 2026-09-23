const express = require('express')
const mongoose = require('mongoose')

const collectionSchema = mongoose.Schema({

    key:{
        type:String,
        required:true,
    },
    pair:{
        type:String,
        required:true,
    },
    device:{
        type:String,
        enum:['mobile', 'desktop', 'kid'],
        required:true,
    },
})

module.exports = mongoose.model('CollectionModel', collectionSchema)