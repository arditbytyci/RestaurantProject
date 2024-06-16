import React, {useEffect} from "react";
import { getProduct } from "../redux/actions/productActions";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";


const Product = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    

    const { productId } = useParams();

    const { product } = useSelector(state => state.products);


    useEffect(() => {
        dispatch(getProduct(productId));
    }, [dispatch, productId])

    const handleGoBackBtn = () => {
		navigate(-1);
	};

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }

return(
    <section className="product-page m-4">
        <button className="btn btn-light text-dark mb-4" onClick={handleGoBackBtn}>
            Go Back
        </button>
        {product && (
            <div className="row">
                <div className="col-md-6">

                     <img  className='img-fluid w-100' src={`/uploads/${product.fileName}`} alt='product'  />
                    
                </div>

                <div className="col-md-5">
                    <h3 className="mb-4">{product.productName}</h3>
                    <p className="text-muted border-top py-2">Price: {' '} {product.productPrice.toLocaleString('en-US', {
								style: 'currency',
								currency: 'EUR',
							})} </p>
                    <p className="text-muted border-top py-2">Status:{' '} {product.productQty <= 0 ? 'Out of stock' : 'In stock'}</p>
                    <p className="text-muted border-top py-2">Description: {product.productDesc} </p>
                    <p className="text-muted border-top py-2">Category: {product.productCategory} </p>
                    

                    <button className="btn btn-dark btn-large btn-block mb-5 py-2" disabled={product.productQty <= 0} onClick={handleAddToCart}> Add to cart</button>

                </div>
            </div>
        )}
    </section>
);


}


export default Product;