const express = require('express')
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        reuired:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    salesPrice:{
        type:Number
    },
    images:[{
        type:String,
        required:true,
    }],
    category:{
        type:String,
        required:true,
    },
    subCategory:{
        type:String,
    },
    brand:{
        type:String,
    },
    sizes:[{
        type:String,
        required:true,
    }],
    colors:{
        type:String,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
        default:0,
    },
    sku:{
        type:String,
        required:true,
        unique:true,
    },
    isFeatured:{
        type:Boolean,
        default:false,
    },
    isNew:{
        type:Boolean,
        default:true,
    },
    isBestSeller:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    }

},{timestamps:true})

module.exports = mongoose.model('productModel', productSchema)