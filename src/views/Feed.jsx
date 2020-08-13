import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRequest, AddPost } from "../store/posts/actions";
import TweetBox from "../components/TweetBox";
import Post from "../components/Post";
import "./Feed.sass";

function Feed(props) {
	useEffect(() => {
		props.fetchRequest();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className='feed'>
			{/* Header */}
			<div className='feed__header'>Feed</div>
			{/* TweetBox */}
			<TweetBox AddPost={props.AddPost} />
			{/* Post */}
			{props.posts.map((post) => (
				<Post
					key={post.text}
					displayName={post.displayName}
					username={post.username}
					avatar={post.avatar}
					text={post.text}
				/>
			))}
		</div>
	);
}

const mapStateToProps = (state) => ({
	posts: state.posts.data,
});

const mapDispatchToProps = {
	fetchRequest,
	AddPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
