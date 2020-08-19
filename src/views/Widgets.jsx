import React from "react";
import { connect } from "react-redux";
// import { CallPosts } from "../api/api";
import { AuthRequest } from "../store/auth/actions";
import "./Widgets.scss";

export const Widgets = (props) => {
  return <div>{/* <button onClick={}>Login</button> */}</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  AuthRequest,
  // CallPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
