import './index.css';

import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Sidebar = () => {
	const [cat, setCat] = useState([]);

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get('http://localhost:5000/api/categories');
			setCat(res.data);
		};

		getCats();
	}, []);

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
			{cat.length > 0 && (
				<div className='sidebarItem'>
					<span className='sidebarTitle'>CATEGORIES</span>
					<ul className='sidebarList'>
						{cat.map((c) => (
							<li className='sidebarListItem' key={c.name}>
								{c.name}
							</li>
						))}
					</ul>
				</div>
			)}
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
