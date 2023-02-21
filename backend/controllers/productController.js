const Product = require("../model/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require('../middlewares/catchAsyncError')

// Create Product -(Admin)
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
}) 

// Get All Products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
};

// Update Product -(Admin)
exports.updateProduct = async (req, res, next) => {
  try {
    console.log(req.params);
    let product = await Product.findById(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Producct not found", 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Product Detail
exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not Found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
};

// Delete Product -(Admin)
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not Found", 404));
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product Deleted Succesfully",
  });
};
