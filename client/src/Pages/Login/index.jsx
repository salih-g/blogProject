import './index.css';

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { Context } from '../../Context/Context';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { dispatch, isFetching } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();

		dispatch({ type: 'LOGIN_START' });

		try {
			const res = await axios.post('http://localhost:5000/api/auth/login', {
				username,
				password,
			});
			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
		} catch (err) {
			dispatch({ type: 'LOGIN_FAILURE' });
		}
	};

	return (
		<div className='login'>
			<span className='loginTitle'> Login</span>
			<form className='loginForm' onSubmit={handleSubmit}>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					className='loginInput'
					type='text'
					placeholder='Enter your username'
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label htmlFor='password'>Password</label>

				<input
					id='password'
					className='loginInput'
					type='password'
					placeholder='Enter your password'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className='loginButton' type='submit' disabled={isFetching}>
					Login
				</button>
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
