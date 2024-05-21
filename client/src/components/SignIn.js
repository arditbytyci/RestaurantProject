import React, {useState} from "react";
import { Link } from "react-router-dom";
import { showErrMsg } from "./helpers/message";
import { showLoading } from "./helpers/loading";
import { signIn } from "../api/auth";
import {isEmail, isEmpty} from "validator";
const SignIn = () => {

    const [formData, setFormData] = useState({

       
        email: 'arditbtc@gmail.com',
        password: 'abc123',
        errorMsg: false,
        loading: false,
        redirectToDashboard: false,
    });

    const {
		email,
		password,
		errorMsg,
		loading,
        redirectToDashboard,
	} = formData;


    //event handlers

	const handleChange = (evt) => {

		setFormData({
			...formData,
			[evt.target.name]: evt.target.value,
			errorMsg: ''
		});
    }

        const handleSubmit = (evt) => {
            evt.preventDefault();
    
            // client-side validation
            if(isEmpty(email) || isEmpty(password))
               {
                   setFormData({
                       ...formData,
                       errorMsg: 'All fields are required'
                   });
               } else if(!isEmail(email)) 
               {
                   setFormData({
                       ...formData,
                       errorMsg: 'Invalid email'
                   });
               } else 
               {
                   const {email, password} = formData;
                   const data = {email, password};
       
                   setFormData({
                       ...formData,
                       loading: true
                   });

                   signIn(data);

               }
           
        }

        //views

    const showSignInForm = () => (
        <form className='signup-form'  noValidate onSubmit={handleSubmit}>
			
			{/* email */}
			<div className='form-group input-group'>
				<div className='input-group-prepend'>
					<span className='input-group-text'>
						<i className='fa fa-envelope'></i>
					</span>
				</div>
				<input
					name='email'
					value={email}
					className='form-control'
					placeholder='Email address'
					type='email'
					onChange={handleChange}
					
				/>
			</div>
			{/* password */}
			<div className='form-group input-group'>
				<div className='input-group-prepend'>
					<span className='input-group-text'>
						<i className='fa fa-lock'></i>
					</span>
				</div>
				<input
					name='password'
					value={password}
					className='form-control'
					placeholder='Create password'
					type='password'
					onChange={handleChange}
				/>
			</div>
			{/* signup button */}
			<div className='form-group'>
				<button type='submit' className='btn btn-primary btn-block'>
					SignIn
				</button>
			</div>
			{/* already have account */}
			<p className='text-center text-black'>
				Dont have an account? <Link to='/signup'>Register now!</Link>
			</p>
		</form>
    );
    


    return (

        <div className='signin-container'>
            <div className='row vh-100'>
                <div className='col-md-4 mx-auto align-self-center'> 
							{errorMsg && showErrMsg(errorMsg)}
							
							{loading && showLoading()}
                            {showSignInForm()} 

							
							
                  </div>
            </div>
       </div>

    );
    }


export default SignIn;