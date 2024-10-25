const express = require('express');
const router = express.Router();
const recyclingController = require('./../controllers/recyclingController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/multer'); // Import the multer middleware

// Get all recycled products
router.route('/recycled-products').get(authMiddleware, recyclingController.GetAllProducts);

// Create a new recycled product
router.route('/recycled-products').post(
    authMiddleware,
    upload.array('images', 5), // Use multer to handle multiple image uploads
    recyclingController.CreateProduct
  );

// Get a specific recycled product by ID
router.route('/recycled-products/:id').get(authMiddleware, recyclingController.GetProduct);

// Update a specific recycled product by ID
router.route('/recycled-products/:id').put(
    authMiddleware,
    upload.array('images', 5), // Use multer to handle multiple image uploads
    recyclingController.UpdateProduct
  );

// Delete a specific recycled product by ID
router.route('/recycled-products/:id').delete(authMiddleware, recyclingController.DeleteProduct);

module.exports = router;
