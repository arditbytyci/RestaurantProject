import React from 'react';
import Card from './Card';
// redux
import { useSelector } from 'react-redux';

const AdminBody = () => {
	const { products } = useSelector(state => state.products);

	return (
		<div className='container bg-black'>
			<div className='row'>
				<div className='card-deck'>
					{products &&
						products.map(product => (
							<Card
								key={product.id}
								product={product}
								adminPage={true}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default AdminBody;


