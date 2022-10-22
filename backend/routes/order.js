const router = require('express').Router();
const {
    allOrders,
    confirmOrder,
    makeOrder,
} = require('../controller/order.controller');
let Movie = require('../models/movie_model');

//view orders

router.route('/').get(allOrders).post(makeOrder);
router.route('/:id').put(confirmOrder);

module.exports = router;
