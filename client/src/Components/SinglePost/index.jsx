import './index.css';

import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import axios from 'axios';

import { Context } from '../../Context/Context';

const SinglePost = () => {
	const PF = 'http://localhost:5000/images/';

	const location = useLocation();
	const { user } = useContext(Context);
	const [post, setPost] = useState([]);
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [updateMode, setUpdateMode] = useState(false);

	const path = location.pathname.split('/')[2];

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get('http://localhost:5000/api/posts/' + path);

			setPost(res.data);
			setTitle(res.data.title);
			setDesc(res.data.desc);
		};
		getPost();
	}, [path]);

	const handleDelete = async () => {
		try {
			await axios.delete(`http://localhost:5000/api/posts/` + path, {
				data: {
					username: user.username,
				},
			});
			window.location.replace('/');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<section className='singlePost'>
			<div className='singlePostWrapper'>
				{post.photo && (
					<img
						className='singlePostImg'
						src={PF + post.photo}
						alt='post image'
					/>
				)}
				{updateMode ? (
					<input
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className='singlePostTitleInput'
						autoFocus
					/>
				) : (
					<h1 className='singlePostTitle'>
						{post.title}
						{post.username === user?.username && (
							<div className='singlePostEdit'>
								<i
									className='singlePostIcon far fa-edit'
									onClick={() => setUpdateMode(true)}
								></i>
								<i
									className='singlePostIcon far fa-trash-alt'
									onClick={handleDelete}
								></i>
							</div>
						)}
					</h1>
				)}
				<div className='singlePostInfo'>
					<span className='singlePostAuthor'>
						Autor:
						<b>
							<Link className='link' to={`/?user=${post.username}`}>
								{post.username}
							</Link>
						</b>
					</span>
					<span className='singlePostDate'>
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				{updateMode ? (
					<textarea
						className='singlePostDescInput'
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				) : (
					<p className='singlePostDesc'>{post.desc}</p>
				)}
			</div>
		</section>
	);
};

export default SinglePost;
