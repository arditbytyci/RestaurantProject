import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ADD_TO_CART } from "../redux/constants/cartConstants";
import { deleteFromCart } from "../redux/actions/cartActions";
import {isAuthenticated} from './helpers/authentication';

const Cart = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const {cart} = useSelector(state => state.cart);


    const handleGoBackBtn = () => {
        navigate('/Shop')
    }
    const handleQtyChange = (e, product) => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

        cart.forEach(cartItem => {
            if(cartItem.id === product.id) {
                cartItem.count = e.target.value;
            }
        });
        localStorage.setItem('cart', JSON.stringify(cart));

        dispatch({
            type: ADD_TO_CART,
            payload: cart,
        });
        
    }

    const handleCheckOut = (evt) => {
        if(isAuthenticated()) {
            navigate('/shipping');
        } else {
            navigate('/SignIn?redirect=shipping');
        }
    }
    

    return(
        <section className="cart-page m-4">
            
            {cart.length <= 0 ? (
                <div className="jumbotron">
                <h1 className="display-4">Your cart is empty</h1>
                <button className="btn btn-dark text-white mt-4" onClick={handleGoBackBtn}>
                    Shop!    
                </button>
            </div>
            ) : (
                <Fragment>
                <div className="jumbotron">
                <h1 className="display-4">Cart</h1>
            </div>
            <div className="row">
              <div className="col-md-8">
                            <table className='table'>
								<thead>
									<tr>
										<th scope='col'></th>
										<th scope='col'>Product</th>
										<th scope='col'>Price</th>
										<th scope='col'>Quantity</th>
										<th scope='col'>Remove</th>
									</tr>
								</thead>
								<tbody>

                                    {cart.map(product => (
                                        <tr key={product.id}>
                                            <th scope="row"> <img className='img-fluid w-100 img-thumbnail' style={{maxWidth: '110px'}} src={`/uploads/${product.fileName}`} alt='product'  /></th>
                                            <td className="mt-3"><Link to={`/product/${product.id}`} className="text-center text-dark">{product.productName}</Link></td>
                                            <td>{product.productPrice.toLocaleString('en-US', {style: 'currency',currency: 'EUR',})}</td>
                                            <td><input type="number" className="border-0" min='1' max={product.productQty}  value={product.count} onChange={e => handleQtyChange(e, product)}/></td>
                                            <td><button type='button' className='btn btn-danger btn-sm' onClick={() => dispatch(deleteFromCart(product))}><i className='far fa-trash-alt pr-1'></i></button></td>
                                        </tr>
                                    ))}

                                    
								</tbody>
							</table>

                </div>
                <div className="col-md-4 border-left pl-4">
                    <h2>Cart Summary</h2>
                    <p className="font-weight-light text-muted border-bottom">{cart.length === 1 ? '(1) Item' : `(${cart.length}) Items`}</p>
                    <p className="font-weight-bold">Total : {cart.reduce((currentSum, currentCartItem) => currentSum + currentCartItem.count * currentCartItem.productPrice, 0).toFixed(2)} EUR</p>
                    <button className="btn btn-dark btn-large btn-block mb-5 py-2" onClick={handleCheckOut}> Proceed to checkout</button>
                </div>
            </div>
            </Fragment>
            )}

        </section>
    );
}


export default Cart;