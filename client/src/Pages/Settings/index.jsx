import './index.css';

import React, { useContext, useState } from 'react';

import axios from 'axios';

import Sidebar from '../../Components/Sidebar';

import { Context } from '../../Context/Context';

const Settings = () => {
	const PF = 'http://localhost:5000/images/';

	const { user, dispatch } = useContext(Context);

	const [file, setFile] = useState(null);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: 'UPDATE_START' });

		const updatedUser = {
			userId: user._id,
			username,
			email,
			password,
		};

		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append('name', filename);
			data.append('file', file);
			updatedUser.profilePic = filename;

			try {
				await axios.post('http://localhost:5000/api/upload', data);
			} catch (err) {
				dispatch({ type: 'UPDATE_FAILURE' });
				console.error(err);
			}
		}

		try {
			const res = await axios.put(
				'http://localhost:5000/api/users/' + user._id,
				updatedUser,
			);
			dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
			setSuccess(true);
		} catch (err) {
			dispatch({ type: 'UPDATE_FAILURE' });
			console.error(err);
		}
	};

	return (
		<div className='settings'>
			<div className='settingsWrapper'>
				<div className='settingsTitle'>
					<span className='settingsUpdateTitle'>Update Your Account</span>
					<span className='settingsDeleteTitle'>Delete Account</span>
				</div>
				<form className='settingsForm' onSubmit={handleSubmit}>
					<label className='settingsChangePP'> Click Picture To Change</label>
					<div className='settingsPP'>
						<label htmlFor='fileInput'>
							<img
								src={file ? URL.createObjectURL(file) : PF + user.profilePic}
								alt='profile picture'
								className='settingsPPimg'
							/>
						</label>
						<input
							id='fileInput'
							type='file'
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>
					<label>Username</label>
					<input
						type='text'
						placeholder={user.username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<label>Email</label>
					<input
						type='email'
						placeholder={user.email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label>Password</label>
					<input
						type='password'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className='settingsSubmit' type='submit'>
						Update
					</button>
					{success && (
						<span className='settingsUpdated'> Profile Has been updated !</span>
					)}
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Settings;
