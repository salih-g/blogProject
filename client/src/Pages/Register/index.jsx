import './index.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const Register = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);

		try {
			const res = await axios.post('http://localhost:5000/api/auth/register', {
				username,
				email,
				password,
			});

			res.data && window.location.replace('/login');
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className='register'>
			<span className='registerTitle'>Register</span>
			<form className='registerForm' onSubmit={handleSubmit}>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					className='registerInput'
					type='text'
					placeholder='Enter your username'
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label htmlFor='email'>Email</label>
				<input
					id='email'
					className='registerInput'
					type='email'
					placeholder='Enter your email'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor='password'>Password</label>

				<input
					id='password'
					className='registerInput'
					type='password'
					placeholder='Enter your password'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className='registerButto' type='submit'>
					Register
				</button>
				{error && (
					<span style={{ color: 'red', marginTop: '10px' }}>
						Something went wrong !
					</span>
				)}
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
