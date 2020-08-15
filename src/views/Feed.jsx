import React, { useEffect } from "react";
import { connect } from "react-redux";
import Post from "../components/Post";
import TweetBox from "../components/TweetBox";
import { AddPost, DeletePost, fetchRequest } from "../store/posts/actions";
import "./Feed.scss";

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
      <TweetBox AddPost={props.AddPost} posts={props.posts} />
      {/* Post */}
      {props.posts.map((post) => (
        <Post
          postId={post.postId}
          DeletePost={props.DeletePost}
          key={post.postId}
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
  DeletePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
