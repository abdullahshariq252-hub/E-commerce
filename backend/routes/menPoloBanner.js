const express = require('express');
const banner = express.Router();

const {
    handleBanner,
    handleCreateProduct,
    getAllProduct,
    handleGettingProduct,
    handleUpdatingProduct,
    handleDeleteProduct
} = require("../controllers/menPolo_Banner");

banner.get("/menPolobanner", handleBanner);
banner.post("/createProduct", handleCreateProduct);
banner.get("/getAllProduct", getAllProduct);
banner.get("/getProduct/:id", handleGettingProduct);
banner.put("/updateProduct/:id", handleUpdatingProduct);
banner.delete("/deleteProduct/:id", handleDeleteProduct);

module.exports = banner;