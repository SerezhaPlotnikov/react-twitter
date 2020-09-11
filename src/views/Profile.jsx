import React from "react";

function Profile(props) {
  return (
    <div>
      <div className='profile__top'>
        <div className='profile__top-back-button'>BACK</div>
        <div className='profile__top-name'>dip</div>
      </div>
      <div className='profile__bgimg'>background-image</div>
      <div className='profile__ava'>ava</div>
      <div className='profile__nick'>dip</div>
      <div className='profile__name'>@_vegapunk</div>
      <div className='profile__description'>Frontend developer</div>
      <div className='profile__following'>9</div>
      <div className='profile__followers'>10</div>
    </div>
  );
}

export default Profile;
