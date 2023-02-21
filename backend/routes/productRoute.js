const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const router = express.Router();

router.get("/getAllProducts", getAllProducts);
router.post("/product/new", createProduct);
router.put("/product/update/:id", updateProduct);
router.delete("/product/update/:id", deleteProduct);
router.get("/product/update/:id", getProductDetails);
module.exports = router;
