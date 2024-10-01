import React, { Fragment, useEffect, useState }  from 'react';
 import { Link, useNavigate } from 'react-router-dom';
//redux
import { useDispatch } from 'react-redux';
import { deleteProduct, getProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const Card = ({product, adminPage = false, homePage = false}) => {


    let navigate = useNavigate();

    const dispatch = useDispatch();
    

    const handleDelete =  () => {
        
        dispatch(deleteProduct(product.id))
        navigate(0)
        
    }
    
    

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }

    return (


        <div id="card" className='col-md-4 my-3'>

            <div className='card h-100'>
                <a href='#!'>
                    <img  className='img-fluid w-100' src={`/uploads/${product.fileName}`} alt='product'  />
                </a>
           

            <div className='card-body text-center'>
                <h5>{product.productName}</h5>
					<hr />
					<h6 className='mb-3'>
						<span className='text-secondary mr-2'>
							{product.productPrice.toLocaleString('en-US', {
								style: 'currency',
								currency: 'EUR',
							})}
						</span>
					</h6>
                    <p className='text-muted'>{product.productQty <= 0 ? 'Out of stock' : 'In stock'}</p>
                    <p>
                        {product.productDesc.length > 60 ? (product.productDesc.substring(0,60) + '...') : (product.productDesc.substring(0,60))}
                    </p>
                    
                    {adminPage && (
                                <Fragment>
                                        <Link   to={`/admin/edit/product/${product.id}`} type='button' className='btn btn-secondary btn-sm mr-1 my-1'>
                                    <i className='far fa-edit pr-1'></i>
                                
                                </Link>
                                <button type='button' className='btn btn-danger btn-sm' onClick={handleDelete}
                                            >
                                    <i className='far fa-trash-alt pr-1'></i>
                                    
                                </button>
                        </Fragment>
                    )}


                {homePage && (
                                <Fragment>
                                        <Link   to={`/product/${product.id}`} type='button' className='btn btn-outline-light text-black  btn-sm mr-1 my-1'>

                                        View product

                                </Link>
                                <button type='button' className='btn btn-outline-warning btn-sm' disabled={product.productQty <= 0} onClick={handleAddToCart}>
                                    
                                    Add to Cart
                                </button>
                        </Fragment>
                    )}

                   
                </div>
            </div>
        </div>
    );
}


export default Card;