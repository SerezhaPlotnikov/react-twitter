import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.sass";

function TweetBox(props) {
  const [tweetText, setTweetText] = useState("");
  const onPostChange = (e) => {
    setTweetText(e.target.value);
  };
  const sendPost = () => {
    const post = {
      displayName: "Serezha",
      postDatabase: Date.now(),
      postId: props.posts[0].postId + 1,
      username: "serezha",
      text: tweetText,
      avatar:
        "https://pbs.twimg.com/profile_images/1171383108622594050/XyQPV_Q5_400x400.jpg",
    };
    props.AddPost(post);
    setTweetText("");
  };
  return (
    <div className='feed__tweetbox'>
      <div className='feed__tweetbox-input'>
        <img
          src='https://pbs.twimg.com/profile_images/1171383108622594050/XyQPV_Q5_400x400.jpg'
          alt='avatar'
        />
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

export default TweetBox;
