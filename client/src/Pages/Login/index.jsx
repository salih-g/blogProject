import './index.css';

import React from 'react';

const Login = () => {
	return (
		<div className='login'>
			<span className='loginTitle'> Login</span>
			<form className='loginForm'>
				<label for='email'>Email</label>
				<input
					id='email'
					className='loginInput'
					type='email'
					placeholder='Enter your email'
				/>
				<label for='password'>Password</label>

				<input
					id='password'
					className='loginInput'
					type='password'
					placeholder='Enter your password'
				/>
				<button className='loginButton'>Login</button>
			</form>
			<button className='registerButton'>Register</button>
		</div>
	);
};

export default Login;
