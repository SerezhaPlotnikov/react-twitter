import React from "react";
import { connect } from 'react-redux'
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


const mapStateToProps = (state) => ({
	posts: state.posts
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
