import './index.css';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../Context/Context';

const Topbar = () => {
	const { user, dispatch } = useContext(Context);

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' });
	};

	return (
		<nav className='top'>
			<div className='topLeft'>
				<i className='topIcon fab fa-twitter-square'></i>
				<i className='topIcon fab fa-instagram-square'></i>
				<i className='topIcon fab fa-pinterest-square'></i>
			</div>
			<div className='topCenter'>
				<ul className='topList'>
					<li className='topListItem'>
						<Link to='/' className='link'>
							Home
						</Link>
					</li>

					<li className='topListItem'>
						<Link to='/' className='link'>
							About
						</Link>
					</li>
					<li className='topListItem'>
						<Link to='/' className='link'>
							Contact
						</Link>
					</li>
					<li className='topListItem'>
						<Link to='/write' className='link'>
							Write
						</Link>
					</li>
					<li className='topListItem' onClick={handleLogout}>
						{user && 'Logout'}
					</li>
				</ul>
			</div>
			<div className='topRight'>
				{user ? (
					<img
						src={
							user.profilePic ||
							'https://lh3.googleusercontent.com/ogw/ADea4I4syEyokKOll1aBNb-Q4DuZGOTkNHKM8XXV-aUZ=s83-c-mo'
						}
						alt='profile picture'
						className='topImg'
					/>
				) : (
					<ul className='topList'>
						<li className='topListItem'>
							<Link to='/login' className='link'>
								Login
							</Link>
						</li>
						<li className='topListItem'>/</li>

						<li className='topListItem'>
							<Link to='/register' className='link'>
								Register
							</Link>
						</li>
					</ul>
				)}

				<i className='topSearchIcon fas fa-search'></i>
			</div>
		</nav>
	);
};

export default Topbar;
