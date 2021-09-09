import './index.css';

import React from 'react';

import Sidebar from '../../Components/Sidebar';

const Settings = () => {
	return (
		<div className='settings'>
			<div className='settingsWrapper'>
				<div className='settingsTitle'>
					<span className='settingsUpdateTitle'>Update Your Account</span>
					<span className='settingsDeleteTitle'>Delete Account</span>
				</div>
				<form className='settingsForm'>
					<label> Click Picture To Change</label>
					<div className='settingsPP'>
						<label htmlFor='fileInput'>
							<img
								src='https://lh3.googleusercontent.com/ogw/ADea4I4syEyokKOll1aBNb-Q4DuZGOTkNHKM8XXV-aUZ=s83-c-mo'
								alt='profile picture'
							/>
						</label>
						<input id='fileInput' type='file' />
					</div>
					<label>Username</label>
					<input type='text' placeholder='sudanmerinosu' />
					<label>Email</label>
					<input type='email' placeholder='sudanmerinosu@gmail.com' />
					<label>Password</label>
					<input type='password' />
					<button className='settingsSubmit'>Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Settings;
