import React, {Fragment, useEffect} from "react";
import './App.css';
import Card from './Card';
import {showLoading} from './helpers/loading';
import { getNewArrivals } from "../redux/actions/filterActions";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCount } from "../redux/actions/productActions";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewArrivals());
    }, [dispatch]);


    useEffect(() => {
		dispatch(getProductsByCount());
	}, [dispatch]);


    
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