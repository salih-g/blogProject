import './index.css';

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import axios from 'axios';

const SinglePost = () => {
	const location = useLocation();
	const [post, setPost] = useState([]);

	const path = location.pathname.split('/')[2];

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get('http://localhost:5000/api/posts/' + path);

			setPost(res.data);
		};
		getPost();
	}, [path]);

	return (
		<section className='singlePost'>
			<div className='singlePostWrapper'>
				{post.photo && (
					<img className='singlePostImg' src={post.photo} alt='post image' />
				)}
				<h1 className='singlePostTitle'>
					{post.title}
					<div className='singlePostEdit'>
						<i className='singlePostIcon far fa-edit'></i>
						<i className='singlePostIcon far fa-trash-alt'></i>
					</div>
				</h1>
				<div className='singlePostInfo'>
					<span className='singlePostAuthor'>
						Autor: <b>{post.username} </b>
					</span>
					<span className='singlePostDate'>
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				<p className='singlePostDesc'>{post.desc}</p>
			</div>
		</section>
	);
};

export default SinglePost;
