import React from "react";


export const showErrMsg = msg => (
   
        <div className="alert alert-danger text-center" role="alert">
            {msg}
        </div>
);

export const showSccsMsg = msg => (
   
    <div className="alert alert-success text-center" role="alert">
        {msg}
    </div>
);