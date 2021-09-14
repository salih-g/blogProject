import './index.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className='register'>
			<span className='registerTitle'>Register</span>
			<form className='registerForm'>
				<label for='username'>Username</label>
				<input
					id='username'
					className='registerInput'
					type='text'
					placeholder='Enter your username'
				/>
				<label for='email'>Email</label>
				<input
					id='email'
					className='registerInput'
					type='email'
					placeholder='Enter your email'
				/>
				<label for='password'>Password</label>

				<input
					id='password'
					className='registerInput'
					type='password'
					placeholder='Enter your password'
				/>
				<button className='registerButto'>Register</button>
			</form>
			<button className='loginButto'>
				<Link to='/login' className='link'>
					Login
				</Link>
			</button>
		</div>
	);
};

export default Register;
