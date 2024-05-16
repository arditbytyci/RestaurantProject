import React, {useState} from 'react';
import { isEmpty, equals, isEmail } from 'validator';
import { Link } from 'react-router-dom';
import {showErrMsg, showSccsMsg} from '../components/helpers/message'
import { showLoading } from './helpers/loading';
import { signUp } from '../api/auth';
import './css/SignUp.css';



const SignUp = () => {

	const [formData, setFormData] = useState({

			username: 'arditbtc',
			email: 'arditbtc@gmail.com',
			password: 'abc123',
			password2: 'abc123',
			successMsg: false,
			errorMsg: false,
			loading: false

	});


	const {
		username,
		email,
		password,
		password2,
		successMsg,
		errorMsg,
		loading
	} = formData;

	//event handlers

	const handleChange = (evt) => {

		setFormData({
			...formData,
			[evt.target.name]: evt.target.value,
			successMsg: '',
			errorMsg: ''
		});

		



	}

	const handleSubmit = (evt) => {
		evt.preventDefault();

		// client-side validation

		if(isEmpty(username)
		 || isEmpty(email) 
		|| isEmpty(password)
		|| isEmpty(password2))
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
		} else if(!equals(password, password2)) 
		{
			setFormData({
				...formData,
				errorMsg: 'Passwords do not match'
			});
		} else 
		{

			const {username, email, password} = formData;
			const data = {username, email, password};

			setFormData({
				...formData,
				loading: true
			})


			signUp(data).then((response) => {
				console.log('Axios SignUp success', response);
				setFormData({
					username:'',
					email:'',
					password:'',
					password2:'',
					loading:false,
					successMsg:response.data.successMessage

				})
			}).catch((err) => {
				console.log('Axios SignUp error', err);
				setFormData({
					...formData,
					loading: false,
					errorMsg: err.response.data.errorMessage,
				});
			});

		}
	}





    // views


    const showSignUpForm = () => (
        <form className='signup-form'  noValidate onSubmit={handleSubmit}>
			{/* username */}
			<div className='form-group input-group'>
				<div className='input-group-prepend'>
					<span className='input-group-text'>
						<i className='fa fa-user'></i>
					</span>
				</div>
				<input
					name='username'
					value={username}
					className='form-control'
					placeholder='Username'
					type='text'
					onChange={handleChange}
				/>
			</div>
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
			{/* password2 */}
			<div className='form-group input-group'>
				<div className='input-group-prepend'>
					<span className='input-group-text'>
						<i className='fa fa-lock'></i>
					</span>
				</div>
				<input
					name='password2'
					value={password2}
					className='form-control'
					placeholder='Confirm password'
					type='password'
					onChange={handleChange}
				/>
			</div>
			{/* signup button */}
			<div className='form-group'>
				<button type='submit' className='btn btn-primary btn-block'>
					SignUp
				</button>
			</div>
			{/* already have account */}
			<p className='text-center text-black'>
				Have an account? <Link to='/signin'>Log In</Link>
			</p>
		</form>
    );


    

        //render


    return (

       <div className='signup-container'>
            <div className='row vh-100'>
                <div className='col-md-4 mx-auto align-self-center'> 
							{errorMsg && showErrMsg(errorMsg)}
							{successMsg && showSccsMsg(successMsg)}
							{loading && showLoading()}
                            {showSignUpForm()} 

							
							
                  </div>
            </div>
       </div>

        
    );
}



export default SignUp;