const { stripeSecretKey } = require('../config/keys');
const stripe = require('stripe')('sk_test_51PSffqGGsJXk0iHFKK2Dije3ClYHpL8eFzgHGs8CSRfnJkKSAzKaGyqmYKD1Qd5UKzcqFXXWn1eUgnQtleGknwJB003h8NBk5Q');

exports.create_payment_intent = async (req, res) => {
	const { total } = req.body;

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: 'EUR',
	});

	res.status(200).json({
		clientSecret: paymentIntent.client_secret,
	});
};