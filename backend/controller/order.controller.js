const MovieOrder = require('../models/movie_order_model');
const AppError = require('../util/AppError');
const catchAsync = require('../util/catchAsync');

// make order
exports.makeOrder = catchAsync(async (req, res, next) => {
    const order = await MovieOrder.create(req.body);
    res.status(201).json({
        status: 'success',
        data: order,
    });
});

// view orders

exports.allOrders = catchAsync(async (req, res, next) => {
    const orders = await MovieOrder.find();

    // send response
    res.status(200).json({
        success: true,
        data: orders,
    });
});

// confirm order

exports.confirmOrder = catchAsync(async (req, res, next) => {
    const order = await MovieOrder.findById(req.params.id);

    if (!order) return next(new AppError('Order not found', 404));

    // update order
    order.status = 'confirmed';

    await order.save();

    // send response
    res.status(200).json({
        success: true,
        data: order,
    });
});
