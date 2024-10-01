import React, { Fragment } from "react";
import { Link } from "react-router-dom";



const ProgressBar = ({step1,step2,step3}) => {



    return (
        <Fragment>
            <nav className="bg-dark" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {step1 ? (<li className="breadcrumb-item active" aria-current='page'><Link to='/Shipping'>Shipping</Link></li>) :
                     (<li className="breadcrumb-item"  aria-current='page'>
                        <Link to='/#' className="text-muted" onClick={evt => evt.preventDefault()} 
                         style={{textDecoration: 'none', cursor: 'not-allowed'}}>
                         Shipping
                        </Link></li>) 
                     }
                    {step2 ? (<li className="breadcrumb-item active" aria-current='page'><Link to='/Payment'>Payment</Link></li>) :
                     (<li className="breadcrumb-item"  aria-current='page'>
                        <Link to='/#' className="text-muted" onClick={evt => evt.preventDefault()} 
                         style={{textDecoration: 'none', cursor: 'not-allowed'}}>
                         Payment
                        </Link></li>) 
                     }
                    {step3 ? (<li className="breadcrumb-item active" aria-current='page'><Link to='/PlaceOrder'>PlaceOrder</Link></li>) :
                     (<li className="breadcrumb-item"  aria-current='page'>
                        <Link to='/#' className="text-muted" onClick={evt => evt.preventDefault()} 
                         style={{textDecoration: 'none', cursor: 'not-allowed'}}>
                         PlaceOrder
                        </Link></li>) 
                     }
                </ol>
            </nav>
        </Fragment>
    );
}


export default ProgressBar;