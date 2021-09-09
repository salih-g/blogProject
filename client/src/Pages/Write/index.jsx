import './index.css';

import React from 'react';

const Write = () => {
	return (
		<div className='write'>
			<img
				src='https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
				alt='post image'
				className='writeImg'
			/>
			<form className='writeForm'>
				<div className='writeFormGroup'>
					<label htmlFor='fileInput'>
						<i className='writeIcon fas fa-plus'></i>
					</label>
					<input type='file' id='fileInput' />
					<input
						type='text'
						placeholder='Title'
						className='writeInput'
						autoFocus={true}
					/>
				</div>
				<div className='writeFormGroup'>
					<textarea
						placeholder='Tell your story...'
						type='text'
						className='writeInput writeText'
					></textarea>
				</div>
				<button className='writeSubmit'>Publish</button>
			</form>
		</div>
	);
};

export default Write;
