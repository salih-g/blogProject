import './index.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
	const PF = 'http://localhost:5000/images/';

	return (
		<section className='post'>
			{post.photo && (
				<Link className='link' to={`/post/${post._id}`}>
					<img className='postImg' src={PF + post.photo} alt='post image' />
				</Link>
			)}
			<div className='postInfo'>
				<div className='postCats'>
					{post.categories.map((c) => (
						<span className='postCat' key={c.name}>
							{c.name}
						</span>
					))}
				</div>
				<Link className='link' to={`/post/${post._id}`}>
					<span className='postTitle'>{post.title}</span>
				</Link>
				<span className='postDate'>
					{new Date(post.createdAt).toDateString()}
				</span>
			</div>
			<p className='postDesc'>{post.desc}</p>
		</section>
	);
};

export default Post;
