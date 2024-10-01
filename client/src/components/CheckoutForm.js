import React, {useState} from "react";
import {
	useStripe,
	useElements,
	PaymentElement,
} from '@stripe/react-stripe-js';
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {

    const stripe = useStripe();
	const elements = useElements();
	let navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	const handleSubmit = async event => {
		event.preventDefault();

		/* FOR DEVELOPMENT
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 4000);
		*/
		// FOR PRODUCTION
		if (!stripe || !elements) {
			return;
		}

		setLoading(true);
		const result = await stripe.confirmPayment({
			elements,
			redirect: 'if_required',
		});
		setLoading(false);

		if (result.error) {
			console.log(result.error.message);
		} else {
			navigate('/Home', {
				state: {
					result,
				},
			});
		}
		
	};

	return (
		<form onSubmit={handleSubmit} className="bg-black">
			<PaymentElement />
			<button
				className='btn btn-primary mt-3'
				disabled={!stripe && !elements && loading}
			>
				{loading ? (
					<span className='fa fa-spinner fa-spin'></span>
				) : (
					'Pay now'
				)}
			</button>
		</form>
	);
}


export default CheckoutForm;