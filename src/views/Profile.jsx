import { Button } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ModalForm from "../components/Modal";
import "./Profile.scss";

const Profile = (props) => {
  console.log(props);
  const { picture, name, given_name } = props.profile.data;
  const [open, setOpen] = React.useState(false);
  const submit = (value) => {
    console.log(value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className='profile'>
        <div className='profile__top-back-button'>BACK</div>
        <div className='profile__top-name'>dip</div>
      </div>
      <div className='profile__picture'>
        <Link to='/profile'>
          <img className='profile__picture-bgimg' src={picture} alt='ava' />
        </Link>
        <div className='profile__box'>
          <Link to='/bookmarks'>
            <img className='profile__picture-ava' src={picture} alt='ava' />
          </Link>
          <Button className='profile__editor' onClick={handleClickOpen}>
            edit profile
          </Button>
          {open ? (
            <ModalForm
              onSubmit={submit}
              open={open}
              handleClose={handleClose}
            />
          ) : null}
        </div>
      </div>
      <div className='profile__nick'>{name}</div>
      <div className='profile__name'>@{given_name}</div>
      <div className='profile__description'>Frontend developer</div>
      <div className='profile__following'>9</div>
      <div className='profile__followers'>10</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
