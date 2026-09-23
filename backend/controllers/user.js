const express = require("express");
const User = require("../models/userModel");
const BannerSchema = require("../models/promotionalBanner");
const categories = require("../models/categories");
const CollectionModel = require("../models/collections");
const bestSellerModel = require("../models/bestSellers");
const productModel = require("../models/menPolo")

// For creating a new user
async function handleSignup(req, res) {
  const { email, password, phone } = req.body;
  const result = await User.create({
    email,
    password,
    phone,
  });

  return res.status(201).json({ msg: "User created", result });
}

// For check Login user from database
async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json("Email and password are required");
    }
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found!" });
    if (user.email !== email) {
      return res.status(200).json({ msg: "Email not verified" });
    }
    if (user.password !== password) {
      return res.status(200).json({ msg: "Password not verified" });
    }
    return res.status(200).json({ msg: "Login Successful", user });
  } catch (error) {
    return res.status(500).json({ msg: "Server Error", error: error.message });
  }
}

// For pics in Promotional Banner
async function handlePromotionalBannerPics(req, res) {
  try {
    const mobileBanner = await BannerSchema.find({ device: "mobile" });
    const desktopBanner = await BannerSchema.find({ device: "desktop" });
    res.status(200).json({ mobileBanner, desktopBanner });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch" });
  }
}

// For Categories
async function handleCtaegories(req, res) {
  try {
    const categoriesImages = await categories.find({});
    res.status(200).json({ categories: categoriesImages });
  } catch (error) {
    console.error("Error in fetching categories:", error);
    res.status(500).json({ error: "Failed to fetch categries" });
  }
}

// For Collections
async function handleCollections(req, res) {
  try {
    const collectionMobileImage = await CollectionModel.find({
      device: "mobile",
    });
    const collectionDesktopImage = await CollectionModel.find({
      device: "desktop",
    });
    const collectionKidImage = await CollectionModel.find({ device: "kid" });

    res
      .status(200)
      .json({
        collectionMobileImage,
        collectionDesktopImage,
        collectionKidImage,
      });
  } catch (error) {
    res.status(500);
    console.error("Error in fetchinf collection: ", error);
  }
}

// For BestSellers
async function handleBestSeller(req, res) {
  try {
    const bestSellerArray = await bestSellerModel.find({});
    res.status(200).json({bestSellerArray})
  } catch (error) {
    res.status(500);
    console.error("Error in fetching Best Sellers", error);
  }
}

// For Men Polo Products if it is applicable on all that i do
async function handleProductModel(req, res) {
  try {
    
  } catch (error) {
    console.error("Error in fetching polo collection:",error)
    res.status(500)
  }  
}

module.exports = {
  handleSignup,
  handleUserLogin,
  handlePromotionalBannerPics,
  handleCtaegories,
  handleCollections,
  handleBestSeller,
  handleProductModel,
};
