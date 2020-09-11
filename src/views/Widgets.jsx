import React from "react";
import { connect } from "react-redux";
// import { CallPosts } from "../api/api";
import { AuthRequest } from "../store/auth/actions";
import "./Widgets.scss";

export const Widgets = (props) => {
  const Auth = () => props.AuthRequest();
  return (
    <div>
      <button onClick={Auth}>Login</button>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  AuthRequest,
  // CallPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
