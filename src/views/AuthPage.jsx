import React from "react";
import { connect } from "react-redux";
import CreateUser from "../components/CreateUser";
import { AuthCreate } from "../store/auth/actions";

const AuthPage = (props) => {
  const sumbit = (value) => {
    console.log(value);
    props.AuthCreate(value);
  };
  if (props.isAuth) {
    return <div>Logout</div>;
  } else {
    return <CreateUser onSubmit={sumbit} />;
  }
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
  AuthCreate,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
