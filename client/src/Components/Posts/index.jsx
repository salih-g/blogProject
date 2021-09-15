import './index.css';

import React from 'react';

import Post from '../Post';

const Posts = ({ posts }) => {
	return (
		<section className='posts'>
			{posts.map((p) => (
				<Post post={p} key={p._id} />
			))}
		</section>
	);
};

export default Posts;
