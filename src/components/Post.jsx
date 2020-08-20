import React from "react";
import "./Post.sass";

export default function Post({
  DeletePost,
  displayName,
  username,
  text,
  postId,
  avatar,
}) {
  return (
    <div className='post'>
      <img src={avatar} alt='avatar' />
      <div className='post__body'>
        <div className='post__body-name'>
          <a href='/'>
            <h3>{displayName}</h3>@{username}
          </a>
          <button
            className='post__body-button'
            onClick={() => DeletePost(postId)}
          >
            x
          </button>
        </div>
        <div className='post__body-text'>{text}</div>
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
