import React, {useState, Fragment} from "react";
import { createCategory } from "../api/category";
import { isEmpty  } from "validator";
import {showErrMsg, showSccsMsg} from './helpers/message'
import {showLoading} from './helpers/loading';





const AdminCategoryModal = () => {

    const [category, setCategory] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);
    

    // event handlers
    const handleCategoryChange = evt => {
        setErrorMsg('');
        setSuccessMsg('');
        setCategory(evt.target.value);
        

    }

    const handleMessages = evt => {
        setErrorMsg('');
        setSuccessMsg('');
    }

    const handleCategorySubmit = evt => {
        evt.preventDefault();
        
        if(isEmpty(category)) {

            setErrorMsg('Field empty');

        } else {

            const data = {category};

            setLoading(true);


             createCategory(data)
             .then(
                response => {
                    setLoading(false);
                    setSuccessMsg(response.data.successMessage);
                    setCategory('');
                }
             )
             .catch(err => {
                setLoading(false);
                setErrorMsg(err.response.data.errorMessage);
             });

        }

     
    }

    //render
    return (
    <div id='addCategoryModal' className='modal' onClick={handleMessages}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-dark">
             <form onSubmit={handleCategorySubmit}>
                <div className="modal-header bg-info text-white">
                    <h5 className="modal-title">Add food</h5>
                    <button className="close" data-dismiss='modal'>
                        <span><i className="fas fa-times"></i></span>
                    </button>
                </div>
                <div className="modal-body my-2">

                        {errorMsg && showErrMsg(errorMsg)}
                        {successMsg && showSccsMsg(successMsg)}
                        {loading ? ( <div className="text-center"> {showLoading()}</div>) : (
                            <Fragment>
                             <label className="text-white">Category</label>
                             <input 
                             type="text"
                             className="form-control" 
                             name="category"
                             value={category}
                             onChange={handleCategoryChange}></input>
                            </Fragment>
                        ) }



                    
                    
                </div>
                <div className="modal-footer">
                    <button data-dismiss='modal' type='button' className="btn btn-dark ">
                        Close
                    </button>
                    <button type="submit" className="btn btn-info">
                        Submit
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};


export default AdminCategoryModal;