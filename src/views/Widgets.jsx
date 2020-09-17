import React from "react";
import { connect } from "react-redux";
// import { CallPosts } from "../api/api";
import { AuthRequest } from "../store/auth/actions";
import "./Widgets.scss";

export const Widgets = (props) => {
<<<<<<< HEAD
  const Auth = () => props.AuthRequest();
  return (
    <div>
      <button onClick={Auth}>Login</button>
=======
  return (
    <div>
      <button onClick={() => props.AuthRequest()}>Login</button>
>>>>>>> b7fc8f0... add auth data
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  AuthRequest,
  // CallPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
