import './index.css';

import React from 'react';
import Header from '../../Components/Header';
import Posts from '../../Components/Posts';
import Sidebar from '../../Components/Sidebar';

const Home = () => {
	return (
		<>
			<Header />
			<div className='home'>
				<Posts />
				<Sidebar />
			</div>
		</>
	);
};

export default Home;
