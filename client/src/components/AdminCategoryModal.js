import React, {useState, Fragment} from "react";
import { isEmpty  } from "validator";
import {showErrMsg, showSccsMsg} from './helpers/message'
import {showLoading} from './helpers/loading';
// redux
import { useSelector, useDispatch } from "react-redux";
import {clear_message} from '../redux/actions/messageActions';
import { createCategory } from "../redux/actions/categoryActions";





const AdminCategoryModal = () => {


    //redux 
    const dispatch = useDispatch();
    const {successMsg, errorMsg} = useSelector(state => state.messages);    
    const {loading} = useSelector(state => state.loading);    
    const [clientSideErrorMsg, setClientSideErrorMsg] = useState('');





    const [category, setCategory] = useState('');
  
    

    // event handlers
    const handleCategoryChange = evt => {
            dispatch(clear_message());
        setCategory(evt.target.value);
        

    }

    const handleMessages = evt => {
      dispatch(clear_message());
    }

    const handleCategorySubmit = evt => {
        evt.preventDefault();
        
        if(isEmpty(category)) {

            setClientSideErrorMsg('Field empty');

        } else {

            const data = {category};

          


            dispatch(createCategory(data));
            setCategory('');

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
                        {clientSideErrorMsg && showErrMsg(clientSideErrorMsg)}
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