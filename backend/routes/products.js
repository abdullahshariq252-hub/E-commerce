const express = require("express")
const product = express.Router()

const {
    createProducts,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct

} = require("../controllers/products")

product.post('/createProducts',createProducts)
product.get('/getAllProducts',getAllProducts)
product.get('/getProduct/:slug',getSingleProduct)
product.put('/updateProduct/:id',updateProduct)
product.delete('/deleteProduct/:id',deleteProduct)

module.exports = product