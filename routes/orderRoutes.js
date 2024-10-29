const express = require('express');
const { 
    createOrder, 
    getAllOrders, 
    getOrder, 
    updateOrderStatus, 
    deleteOrder 
} = require('../controllers/orderController');

const router = express.Router();

// Order Routes
router.post('/orders', createOrder);
router.get('/orders', getAllOrders);
router.get('/orders/:id', getOrder);
router.patch('/orders/:id', updateOrderStatus);
router.delete('/orders/:id', deleteOrder);

module.exports = router;
