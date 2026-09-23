const express = require('express')
const router = express.Router()
const {
        handleSignup, 
        handleUserLogin, 
        handlePromotionalBannerPics, 
        handleCtaegories, 
        handleCollections,
        handleBestSeller
    } 
    = require('../controllers/user')



// Routes

router.post("/Signup",handleSignup)
router.post("/Login",handleUserLogin)
router.get("/PromotionalBanner", handlePromotionalBannerPics)
router.get("/Categories", handleCtaegories)
router.get("/Collections", handleCollections)
router.get("/BestSellers", handleBestSeller)

module.exports = router