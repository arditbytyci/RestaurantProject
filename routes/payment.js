const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment')
const { jwAuth } = require('../middleware/authenticator');

router.post('/payment-intent', //jwAuth,
 paymentController.create_payment_intent)


module.exports = router;