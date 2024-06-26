import React, {Fragment, useEffect, useState} from "react";
import './App.css';
import Card from './Card';
import {showLoading} from './helpers/loading';
import { getNewArrivals } from "../redux/actions/filterActions";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCount } from "../redux/actions/productActions";
import { useLocation } from "react-router-dom";
import { clearCart } from "../redux/actions/cartActions";
import { clearOrder } from "../redux/actions/orderActions";
import { clearCartLocalStorage } from "./helpers/localStorage";

const Home = () => {

    const location = useLocation();
    const dispatch = useDispatch();


    useEffect(() => {
		if (
			location.state &&
			location.state.result.paymentIntent.status === 'succeeded'
		) {
			dispatch(clearCart());
			dispatch(clearOrder());
			clearCartLocalStorage(() => {
				setSuccessMsg('Your payment was successful!');
				setTimeout(() => {
					setSuccessMsg('');
				}, 5000);
			});
		}
		// eslint-disable-next-line
	}, []);

    useEffect(() => {
        dispatch(getNewArrivals());
    }, [dispatch]);


    useEffect(() => {
		dispatch(getProductsByCount());
	}, [dispatch]);


    const [successMsg, setSuccessMsg] = useState('');
    const { newArrivals } = useSelector(state => state.filters);
    const { loading } = useSelector(state => state.loading);
    const { products } = useSelector(state => state.products);;



   

    

    return (
        
        <section className="home-page">
            <div className="banner-image"></div>

            {loading ? (<div className="text-center">{showLoading()}</div>) : (




                <Fragment>
                    <div className="container">
                    <hr className="py-4"></hr>
                    {location.state &&
							location.state.result.paymentIntent.status ===
								'succeeded' &&
							successMsg && (
								<div
									className='alert alert-success text-center'
									role='alert'
								>
									{successMsg}
								</div>
							)}
                        <h4 className="py-4">New Arrivals</h4>
                        <div className="row">
                            {newArrivals && newArrivals.map(newArrival => (
                                <Card key={newArrival.id} product={newArrival} homePage={true}/>
                            ))}
                        </div>
                    </div>
                </Fragment>

            )}

           
                <div className="container">
                <hr className="py-4"></hr>
               <h4 className="py-4">Menu</h4>
                        <div className="row">
                        {products &&
								products.map(product => (
									<Card
										key={product.id}
										product={product}
										homePage={true}
									/>
								))}
                        </div>
                </div>
        </section>

    );

    


}

export default Home;