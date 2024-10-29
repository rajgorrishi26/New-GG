// controllers/orderController.js
const Order = require('../models/Order');
const Product = require('../models/Product');
const asyncHandler = require('../utils/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

// Create Order
exports.createOrder = asyncHandler(async (req, res, next) => {
    const { productId, quantity, userId } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
        return next(new ErrorResponse("Product not found", 404));
    }

    const totalPrice = product.price * quantity;

    const order = await Order.create({
        product: productId,
        user: userId,
        quantity,
        totalPrice,
    });

    res.status(201).json({
        success: true,
        data: order
    });
});

// Get All Orders
exports.getAllOrders = asyncHandler(async (req, res, next) => {
    const orders = await Order.find();

    if (!orders || orders.length === 0) {
        return next(new ErrorResponse("No orders found", 404));
    }

    res.status(200).json({
        success: true,
        count: orders.length,
        data: orders
    });
});

// Get Order by ID
exports.getOrder = asyncHandler(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorResponse("Order not found", 404));
    }

    res.status(200).json({
        success: true,
        data: order
    });
});

// Update Order Status
// status panding or shipped 
exports.updateOrderStatus = asyncHandler(async (req, res, next) => {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);
    if (!order) {
        return next(new ErrorResponse("Order not found", 404));
    }

    order.status = status || order.status;
    await order.save();

    res.status(200).json({
        success: true,
        data: order
    });
});

// Delete Order
exports.deleteOrder = asyncHandler(async (req, res, next) => {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
        return next(new ErrorResponse("Order not found", 404));
    }

    res.status(204).json({
        success: true,
        data: null
    });
});
