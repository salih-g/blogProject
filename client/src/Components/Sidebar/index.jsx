import './index.css';

import React from 'react';

const Sidebar = () => {
	return (
		<section className='sidebar'>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>ABOUT ME</span>
				<img
					src='https://lh3.googleusercontent.com/ogw/ADea4I4syEyokKOll1aBNb-Q4DuZGOTkNHKM8XXV-aUZ=s83-c-mo'
					alt='profile picture'
				/>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</p>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>CATEGORIES</span>
				<ul className='sidebarList'>
					<li className='sidebarListItem'>Life</li>
					<li className='sidebarListItem'>Music</li>
					<li className='sidebarListItem'>Stlye</li>
					<li className='sidebarListItem'>Sport</li>
					<li className='sidebarListItem'>Tech</li>
					<li className='sidebarListItem'>Cinema</li>
				</ul>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>FOLLOW US</span>
				<div className='sidebarSocial'>
					<i className='sidebarIcon fab fa-twitter-square'></i>
					<i className='sidebarIcon fab fa-instagram-square'></i>
					<i className='sidebarIcon fab fa-pinterest-square'></i>
				</div>
			</div>
		</section>
	);
};

export default Sidebar;
