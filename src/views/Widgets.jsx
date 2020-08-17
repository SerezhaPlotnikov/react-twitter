import React from "react";
import { connect } from "react-redux";
import { AuthRequest } from "../store/auth/actions";
import "./Widgets.scss";

export const Widgets = (props) => {
  return (
    <div>
      <button onClick={props.AuthRequest}>Login</button>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  AuthRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
