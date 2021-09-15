import './index.css';

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import axios from 'axios';

import Header from '../../Components/Header';
import Posts from '../../Components/Posts';
import Sidebar from '../../Components/Sidebar';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const { search } = useLocation();

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('http://localhost:5000/api/posts' + search);

			setPosts(res.data);
		};

		fetchPosts();
	}, [search]);

	return (
		<>
			<Header />
			<div className='home'>
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	);
};

export default Home;
