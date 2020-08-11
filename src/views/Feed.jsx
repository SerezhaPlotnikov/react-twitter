import React from "react";
import TweetBox from "../components/TweetBox";
import Post from "../components/Post";
import "./Feed.css";

export default function Feed() {
	return (
		<div className='feed'>
			{/* Header */}
			<div className='feed__header'>Feed</div>
			{/* TweetBox */}
			<TweetBox />
			{/* Post */}
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
}
