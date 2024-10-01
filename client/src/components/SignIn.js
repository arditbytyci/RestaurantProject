import React, {useState, useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { showErrMsg } from "./helpers/message";
import { showLoading } from "./helpers/loading";
import { signIn } from "../api/auth";
import {isEmail, isEmpty} from "validator";
import {isAuthenticated, setAuthentication} from './helpers/authentication'
const SignIn = () => {

	let navigate = useNavigate();
	let location = useLocation();
	

	useEffect(() => {
		if (isAuthenticated() && isAuthenticated().role === 1) {
			console.log('Redirecting to adminDashboard');
			navigate('/admin/dashboard');
		} else if(isAuthenticated() && isAuthenticated().role === 0) {
			console.log('Redirecting to User dashboard');
			navigate('/');
		}
	}, [navigate]); 


    const [formData, setFormData] = useState({

       
        email: '',
        password: '',
        errorMsg: false,
        loading: false,
    });

    const {
		email,
		password,
		errorMsg,
		loading,
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

                   signIn(data)
				   .then(response => {

						setAuthentication(response.data.token, response.data.User);
						const redirect = location.search.split('=')[1];

						if (isAuthenticated() && isAuthenticated().role === 1) {
							
							navigate('/admin/dashboard');
						} else if(isAuthenticated() && isAuthenticated().role === 0 && !redirect ) {
							
							navigate('/Home');
						} else {
							
							navigate('/Shipping');
						}

				   }).catch(err => {
					console.log('SignIn api function error', err);
					setFormData({
						...formData,
						loading: false,
						errorMsg: err.response.data.errorMessage 
					});
				   })

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
			<p className='text-center text-dark'>
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