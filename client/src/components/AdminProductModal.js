import React, { useState, Fragment} from "react";

import { isEmpty  } from "validator";
import {showErrMsg, showSccsMsg} from './helpers/message'
import {showLoading} from './helpers/loading';
// redux
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../redux/actions/productActions";
import { clear_message } from "../redux/actions/messageActions";

const AdminProductModal = () =>  {



    //redux

    

    const {loading} = useSelector(state => state.loading);
    const {successMsg, errorMsg} = useSelector(state => state.messages);
    const {categories} = useSelector(state => state.categories);
    const [clientSideErrorMsg, setClientSideErrorMsg] = useState('');


    const dispatch = useDispatch();

    // component state
    const [productData, setProductData] = useState({
        productImage: null,
        productName: '',
        productDesc: '',
        productPrice: '',
        productCategory: '',
        productQty: '', 
    });

    const {
        productImage,
        productName,
        productDesc,
        productPrice,
        productCategory,
        productQty,
    } = productData;


  


    //event handlers
    const handleMessages = evt => {
        dispatch(clear_message());
        setClientSideErrorMsg('');
    }

    const handleProductImage = evt => {
        
        setProductData({
            ...productData,
            [evt.target.name] : evt.target.files[0]
        })
    }

    const handleProductChange = evt => {
        setProductData({
            ...productData,
            [evt.target.name] : evt.target.value
        })
    }

    const handleProductSubmit = evt => {
        evt.preventDefault();

        if(productImage === null) { 
            setClientSideErrorMsg('Please select an image.');
        } else if(isEmpty(productName) || isEmpty(productDesc) || isEmpty(productPrice)) {
            setClientSideErrorMsg('All fields are required.');
        } else if(isEmpty(productCategory)) {
            setClientSideErrorMsg('Please select a category.');
        } else if(isEmpty(productQty)) {
            setClientSideErrorMsg('Please select a quantity.');
        } else {
            //success

            let formData = new FormData();


            formData.append('productImage',productImage);
            formData.append('productName',productName);
            formData.append('productDesc',productDesc);
            formData.append('productPrice',productPrice);
            formData.append('productCategory',productCategory);
            formData.append('productQty',productQty);

            
            dispatch(createProduct(formData));
                setProductData({
                    productImage: null,
                    productName: '',
                    productDesc: '',
                    productPrice: '',
                    productCategory: '',
                    productQty: '', 
                });
        
        }


    }



    return (
    <div id='addFoodModal' className='modal' onClick={handleMessages}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-dark">
             <form onSubmit={handleProductSubmit}>
                <div className="modal-header bg-warning text-white">
                    <h5 className="modal-title text-dark">Add food</h5>
                    <button className="close" data-dismiss='modal'>
                        <span><i className="fas fa-times"></i></span>
                    </button>
                </div>
                <div className="modal-body my-2">
                        {clientSideErrorMsg && showErrMsg(clientSideErrorMsg)}
                        {errorMsg && showErrMsg(errorMsg)}
                        {successMsg && showSccsMsg(successMsg)}
                        {loading ? ( <div className="text-center"> {showLoading()}</div>) : (
                            <Fragment>
                                    <div className="custom-file mb-2">

                                        <input type="file" className="custom-file-input" name="productImage"  onChange={handleProductImage}></input>
                                        <label className="custom-file-label" >Choose file</label>

                                    </div>

                                    <div className="form-group">
                                        <label className="text-white">Name</label>
                                        <input type="text" className="form-control" name="productName" value={productName} onChange={handleProductChange}></input>
                                    </div>

                                    <div className="form-group">

                                        <label className="text-white">Description</label>
                                        <textarea className="form-control" rows='2' name="productDesc" value={productDesc} onChange={handleProductChange}></textarea>

                                    </div>

                                    <div className="form-group">
                                        <label className="text-white">Price</label>
                                        <input type="text" className="form-control" name="productPrice" value={productPrice} onChange={handleProductChange}></input>

                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-4 ml-5">
                                        <label className="text-white">Category</label>
                                            <select className="custom-select mr-sm-2" name="productCategory" onChange={handleProductChange}>

                                                <option value=''>
													Choose one...
												</option>
                                               {categories && categories.map(c => (
                                                
                                                <option className="text-dark"
                                                key={c.category}
                                                value={c.category}>
                                                    {c.category}
                                                </option>
                                               ))
                                               }
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4 ml-auto mr-5">
                                            <label className="text-white">Quantity</label>
                                            <input type="number" className="form-control" min="0" max="1000" name="productQty" value={productQty} onChange={handleProductChange}></input>
                                        </div>

                                    </div>
                            </Fragment>
                        ) }



                    
                    
                </div>
                <div className="modal-footer">
                    <button data-dismiss='modal' type='button' className="btn btn-dark">
                        Close
                    </button>
                    <button type="submit" className="btn btn-warning text-white">
                        Submit
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};


export default AdminProductModal;