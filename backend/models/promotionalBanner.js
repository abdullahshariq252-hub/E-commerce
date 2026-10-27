const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema({

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
        enum:['mobile','desktop'],
        required:true,
    }
})

module.exports = mongoose.model('BannerSchema', bannerSchema)