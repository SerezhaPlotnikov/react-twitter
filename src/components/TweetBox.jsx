import React from 'react'

import "./TweetBox.css";
import { Button } from "@material-ui/core";


function TweetBox() {
  return (
      <div className='feed__tweetbox'>
				<div className='feed__tweetbox-input'>
					<img
						src='https://pbs.twimg.com/profile_images/1171383108622594050/XyQPV_Q5_400x400.jpg'
						alt='avatar'
					/>
					<input type='text' placeholder={`What's happening?`} />
				</div>
				<div className='feed__tweetbox-bar'>
					<div className='feed__tweetbox-bar-icons'>
						<a href='@'>1</a>
						<a href='@'>2</a>
						<a href='@'>3</a>
						<a href='@'>4</a>
						<a href='@'>5</a>
					</div>
					<div>
						<Button
							variant='outlined'
							fullWidth
							className='feed__tweetbox-bar-button'
						>
							Tweet
						</Button>
					</div>
				</div>
			</div>
  )
}

export default TweetBox
