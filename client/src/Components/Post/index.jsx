import './index.css';

import React from 'react';

const Post = () => {
	return (
		<section className='post'>
			<img
				className='postImg'
				src='https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
				alt='post image'
			/>
			<div className='postInfo'>
				<div className='postCats'>
					<span className='postCat'>Music</span>
					<span className='postCat'>Life</span>
				</div>
				<span className='postTitle'>Lorem Ipsum is simply</span>
				{/* <hr /> */}
				<span className='postDate'>1 hour ago</span>
			</div>
			<p className='postDesc'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged.
			</p>
		</section>
	);
};

export default Post;
