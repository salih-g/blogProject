import './index.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
	return (
		<section className='post'>
			{post.photo && (
				<img className='postImg' src={post.photo} alt='post image' />
			)}
			<div className='postInfo'>
				<div className='postCats'>
					{post.categories.map((c) => (
						<span className='postCat' key={c.name}>
							{c.name}
						</span>
					))}
				</div>
				<Link className='link'>
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
