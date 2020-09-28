import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import "./TweetBox.sass";

function TweetBox(props) {
  const [tweetText, setTweetText] = useState("");
  const onPostChange = (e) => {
    setTweetText(e.target.value);
  };
  const sendPost = () => {
    const post = {
      displayName: props.auth.given_name + " " + props.auth.family_name,
      postDatabase: Date.now(),
      postId: props.posts[0].postId + 1,
      username: props.auth.name,
      text: tweetText,
      avatar: props.auth.picture,
    };
    props.AddPost(post);
    setTweetText("");
  };
  return (
    <div className='feed__tweetbox'>
      <div className='feed__tweetbox-input'>
        <img src={props.auth.picture} alt='avatar' />
        <input
          onChange={onPostChange}
          value={tweetText}
          type='text'
          placeholder={`What's happening?`}
        />
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
            onClick={sendPost}
            variant='outlined'
            fullWidth
            className='feed__tweetbox-bar-button'
          >
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth.data,
});
export default connect(mapStateToProps)(TweetBox);
