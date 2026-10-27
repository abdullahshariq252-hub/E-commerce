const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    salesPrice: {
      type: Number,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    age_group: {
      type: String,
      required: true,
    },
    target_audience: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
    },
    brand: {
      type: String,
    },
    sizes: [
      {
        size: {
          type: String,
        },
        stock: {
          type: Number,
          default: 0,
        },
      },
    ],
    productstock: {
      type: Number,
    },
    colors: {
      type: String,
      required: true,
    },

    sku: {
      type: String,
      required: true,
      unique: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isNewProduct: {
      type: Boolean,
      default: true,
    },
    isBestSeller: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("products", productSchema);
