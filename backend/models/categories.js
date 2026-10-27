const mongoose = require('mongoose')

const categoriesSchema = mongoose.Schema({

    key:{
        type:String,
        required:true
    },
    pair:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },

    
})

const categories = mongoose.model('CategoriesModel',categoriesSchema)

module.exports = categories