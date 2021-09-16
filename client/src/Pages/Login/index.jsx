import './index.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className='login'>
			<span className='loginTitle'> Login</span>
			<form className='loginForm'>
				<label htmlFor='email'>Email</label>
				<input
					id='email'
					className='loginInput'
					type='email'
					placeholder='Enter your email'
				/>
				<label htmlFor='password'>Password</label>

				<input
					id='password'
					className='loginInput'
					type='password'
					placeholder='Enter your password'
				/>
				<button className='loginButton'>Login</button>
			</form>
			<button className='registerButton'>
				<Link to='/register' className='link'>
					Register
				</Link>
			</button>
		</div>
	);
};

export default Login;
