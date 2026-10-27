const User = require("../models/userModel");
const BannerSchema = require("../models/promotionalBanner");
const categories = require("../models/categories");
const CollectionModel = require("../models/collections");
const bestSellerModel = require("../models/bestSellers");

// For creating a new user
async function handleSignup(req, res) {
  try {
    const { email, password, phone } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }

    const result = await User.create({ email, password, phone });
    return res.status(201).json({ msg: "User created", result });
  } catch (error) {
    const status = error.code === 11000 ? 409 : error.name === "ValidationError" ? 400 : 500;
    return res.status(status).json({ msg: "User could not be created", error: error.message });
  }
}

// For check Login user from database
async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found!" });
    if (user.password !== password) {
      return res.status(401).json({ msg: "Invalid email or password" });
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
    res.status(500).json({ error: "Failed to fetch categories" });
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
    console.error("Error in fetching collection:", error);
    res.status(500).json({ error: "Failed to fetch collections" });
  }
}

// For BestSellers
async function handleBestSeller(req, res) {
  try {
    const bestSellerArray = await bestSellerModel.find({});
    res.status(200).json({bestSellerArray})
  } catch (error) {
    console.error("Error in fetching Best Sellers:", error);
    res.status(500).json({ error: "Failed to fetch best sellers" });
  }
}

module.exports = {
  handleSignup,
  handleUserLogin,
  handlePromotionalBannerPics,
  handleCtaegories,
  handleCollections,
  handleBestSeller,
};
