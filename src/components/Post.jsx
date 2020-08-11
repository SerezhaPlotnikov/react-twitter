import React from "react";
import "./Post.css";

export default function Post() {
	return (
		<div className='post'>
			<img
				src='https://pbs.twimg.com/profile_images/1171383108622594050/XyQPV_Q5_400x400.jpg'
				alt='avatar'
			/>
			<div className='post__body'>
				<div className='post__body-name'>
					<a href='/'>
						<h3>Serezha</h3>
					</a>
					@serezha
				</div>
				<div className='post__body-text'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
					voluptas, perspiciatis quam sapiente omnis fugiat illo magnam a quos
					suscipit molestiae porro maxime! Inventore perferendis aspernatur,
					placeat dolore doloribus nisi.
				</div>
				<div className='post__body-icons'>
					<img src='' alt='1' />
					<img src='' alt='2' />
					<img src='' alt='3' />
					<img src='' alt='4' />
					<img src='' alt='5' />
				</div>
			</div>
		</div>
	);
}
