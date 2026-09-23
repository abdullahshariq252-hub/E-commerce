const express = require('express')
const product = express.Router();


const {
    handleBanner,
    handleCreateProduct,
    getAllProuduct,
    handleGettingProduct,
    handleUpdatingProuduct,
    handleDeleteProduct
} = require("../controllers/menPolo_productController")

product.get("/menPolobanner", handleBanner)

product.post("/createProduct", handleCreateProduct)
product.get("/getAllProduct", getAllProuduct)
product.get("/getProduct/:id", handleGettingProduct)
product.put("/updateProduct/:id", handleUpdatingProuduct)
product.delete("/deleteProduct/:id", handleDeleteProduct)

module.exports = product