const MenPolo = require('../models/menPolo');
const Product = require('../models/products');

function handleProductError(res, error, message) {
    const status = error.name === "ValidationError" || error.name === "CastError"
        ? 400
        : error.code === 11000
            ? 409
            : 500;

    return res.status(status).json({ success: false, message, error: error.message });
}

// Handle Banners
async function handleBanner(req, res) {
    try {
        const bannerMobile = await MenPolo.find({ device: 'mobile' });
        const bannerDesktop = await MenPolo.find({ device: 'desktop' });
        res.status(200).json({ bannerMobile, bannerDesktop });
    } catch (error) {
        return handleProductError(res, error, "Banners not fetched");
    }
}

// Get All Products with query filtering
async function getAllProduct(req, res) {
    try {
        const { category, name } = req.query;
        let filter = {};
        
        if (category) filter.category = category;
        if (name) filter.name = name;

        const products = await Product.find(filter);
        res.status(200).json({
            success: true,
            message: "All Products fetched successfully",
            data: products
        });
    } catch (error) {
        return handleProductError(res, error, "Products not fetched from database");
    }
}

// Create Product
async function handleCreateProduct(req, res) {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        return handleProductError(res, error, "Product not created");
    }
}

// Get Single Product by ID
async function handleGettingProduct(req, res) {
    try {
        const productData = await Product.findById(req.params.id);
        if (!productData) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: productData });
    } catch (error) {
        return handleProductError(res, error, "Product not fetched");
    }
}

// Update Product
async function handleUpdatingProduct(req, res) {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        return handleProductError(res, error, "Product not updated");
    }
}

// Delete Product
async function handleDeleteProduct(req, res) {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: deletedProduct });
    } catch (error) {
        return handleProductError(res, error, "Product not deleted");
    }
}

module.exports = {
    handleBanner,
    handleCreateProduct,
    getAllProduct,
    handleGettingProduct,
    handleUpdatingProduct,
    handleDeleteProduct
};