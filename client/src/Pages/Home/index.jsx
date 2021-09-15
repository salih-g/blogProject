import './index.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../Components/Header';
import Posts from '../../Components/Posts';
import Sidebar from '../../Components/Sidebar';

const Home = () => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('http://localhost:5000/api/posts');

			console.log(res);
		};

		fetchPosts();
	}, []);

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
