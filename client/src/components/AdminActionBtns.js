import React from "react";


const showActionBtns = () => (
    <div className='bg-light my-2'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 my-1'>
                    <button className='btn btn-outline-info btn-block' data-toggle='modal' data-target='#addCategoryModal'>
                        <i className="fas fa-plus">  Add category</i>
                    </button>
                </div>

                <div className='col-md-4 my-1'>
                    <button className='btn btn-outline-warning btn-block' data-toggle='modal' data-target='#addFoodModal'>
                        <i className="fas fa-plus">  Add food</i>
                    </button>
                </div>

                <div className='col-md-4 my-1'>
                    <button className='btn btn-outline-success btn-block'>
                        <i className="fas fa-money-check-alt">  View orders</i>
                    </button>
                </div>

            </div>
        </div>
    </div>
);


export default showActionBtns;


