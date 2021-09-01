import './index.css';

import React from 'react';

const Topbar = () => {
	return (
		<nav className='top'>
			<div className='topLeft'>
				<i className='topIcon fab fa-twitter-square'></i>
				<i className='topIcon fab fa-instagram-square'></i>
				<i className='topIcon fab fa-pinterest-square'></i>
			</div>
			<div className='topCenter'>
				<ul className='topList'>
					<li className='topListItem'>HOME</li>
					<li className='topListItem'>ABOUT</li>
					<li className='topListItem'>CONTACT</li>
					<li className='topListItem'>WRITE</li>
					<li className='topListItem'>LOGOUT</li>
				</ul>
			</div>
			<div className='topRight'>
				<img
					src='https://lh3.googleusercontent.com/ogw/ADea4I4syEyokKOll1aBNb-Q4DuZGOTkNHKM8XXV-aUZ=s83-c-mo'
					alt='profile picture'
					className='topImg'
				/>
				<i className='topSearchIcon fas fa-search'></i>
			</div>
		</nav>
	);
};

export default Topbar;
