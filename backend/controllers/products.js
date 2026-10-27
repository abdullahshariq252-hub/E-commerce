const product = require("../models/products");

function handleProductError(response, error, message) {
  let status;

  if (error.name === "ValidationError" || error.name === "CastError") {
    status = 400; // Bad Request
  } else if (error.code === 11000) {
    status = 409; // Conflict (Duplicate entry)
  } else {
    status = 500; // Internal Server Error (Fallback)
  }

  return response.status(status).json({
    success: false,
    message,
    error: error.message,
  });
}

// Create Products
async function createProducts(request, response) {
  try {
    const create_product = await product.create(request.body);
    response.status(201).json({
      success: true,
      message: "Product created successfully",
      data: create_product,
    });
  } catch (error) {
    return handleProductError(response, error, "Product not created");
  }
}

// Getting All products
async function getAllProducts(request, response) {
  try {
   const filter = {};
const fields = ["category", "name", "age_group", "target_audience"];

for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    
    if (typeof request.query[field] === "string") {
        filter[field] = request.query[field];
    }
}
    const products = await product.find(filter);
    response.status(200).json({
      success: true,
      message: "All products fetched successfully",
      data: products,
    });
  } catch (error) {
    return handleProductError(
      response,
      error,
      "Products not fetched from database",
    );
  }
}

// Get a Single product
async function getSingleProduct(request, response) {
  try {
    const singleproduct = await product.findOne({ slug: request.params.slug });
    if (!singleproduct) {
      return response.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    response.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: singleproduct,
    });
  } catch (error) {
    return handleProductError(response, error, "Product not fetched");
  }
}

// Update a Product
async function updateProduct(request, response) {
  try {
    const updatedProduct = await product.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true, runValidators: true },
    );
    if (!updatedProduct) {
      return response.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    response.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    return handleProductError(response, error, "Product not updated");
  }
}

// Delete a Product
async function deleteProduct(request, response) {
  try {
    const deletedProduct = await product.findByIdAndDelete(request.params.id);
    if (!deletedProduct) {
      return response.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    response.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: deletedProduct,
    });
  } catch (error) {
    return handleProductError(response, error, "Product not deleted");
  }
}

module.exports = {
  createProducts,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
