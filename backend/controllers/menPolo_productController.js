const express = require("express");

const productModel = require("../models/menPoloProducts");

const MenPolo = require("../models/menPolo");

// For banner
async function handleBanner(req, res) {
  try {
    const bannerMobile = await MenPolo.find({ device: "mobile" });
    const bannerDesktop = await MenPolo.find({ device: "desktop" });
    res.status(200).json({ bannerMobile, bannerDesktop });
  } catch (error) {
    console.error("Error in getting banner:", error);
    res.status(500).json({
      success: false,
      message: "Error in getting banner",
      error: error.message,
    });
  }
}

// For creating a product
async function handleCreateProduct(req, res) {
  try {
    const createNewProduct = await productModel.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Product created",
      data: createNewProduct,
    });
  } catch (error) {
    console.error("Error in creating products:", error);
    res.status(500);
  }
}

// fOR GETTING A ALL PRODUCT
async function getAllProuduct(req, res) {
  try {
    const gettingAll = req.query.category
      ? { category: req.query.category }
      : {};
    const gettingAllProduct = await productModel.find(gettingAll);
    if (!gettingAllProduct) {
      res.status(404).json({
        success: false,
        message: "Products not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Products found",
    });
  } catch (error) {
    console.error("Error in getting app products: ", error);
    res.status(500);
  }
}

// For getting a product
async function handleGettingProduct(req, res) {
  try {
    const getProduct = await productModel.findById(req.params.id);
    if (!getProduct) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Product found",
        data: getProduct,
      });
    }
  } catch (error) {
    console.error("Error in getting a product: ", error);
    res.status(500);
  }
}

// For Updating a product
async function handleUpdatingProuduct(req, res) {
  try {
    const updateProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updateProduct) {
      res.status(400).json({
        success: false,
        message: "Product not found so not update it.",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Product updated",
        data: updateProduct,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in updating product",
      error: error.message,
    });
  }
}

// 5. DELETE: Kisi product ko database se khatam karne ke liye (DELETE)
async function handleDeleteProduct(req, res) {
  try {
    const deleteProduct = await productModel.findByIdAndDelete(req.params.id);

    if (!deleteProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found to delete",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product deleted successfully",
      });
    }
  } catch (error) {
    console.error("Error in deleting product: ", error);
    return res.status(500);
  }
}

module.exports = {
  handleBanner,
  handleCreateProduct,
  handleGettingProduct,
  handleUpdatingProuduct,
  handleDeleteProduct,
  getAllProuduct,
};
