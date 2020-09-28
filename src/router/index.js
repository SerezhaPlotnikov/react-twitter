import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthPage from "../views/AuthPage";
import Feed from "../views/Feed";
import Profile from "../views/Profile";

function Routes(props) {
  return (
    <Switch>
      <Route>
        {!props.isAuth ? <Redirect to='/bookmarks' /> : <MainRoutes />}
      </Route>
    </Switch>
  );
}

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path='/home' component={Feed} />
      <Route path='/search' component={Feed} />
      <Route path='/notifications' component={Feed} />
      <Route path='/messages' component={Feed} />
      <Route path='/bookmarks'>
        <AuthPage />
      </Route>
      <Route path='/lists' component={Feed} />
      <Route path='/profile' component={Profile} />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(Routes);
