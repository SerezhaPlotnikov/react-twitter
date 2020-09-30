import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import AuthPage from "../views/AuthPage";
// import Feed from "../views/Feed";
// import Profile from "../views/Profile";

const Profile = lazy(() => import("../views/Profile"));
const Feed = lazy(() => import("../views/Feed"));
const AuthPage = lazy(() => import("../views/AuthPage"));

function Routes(props) {
  return (
    <Switch>
      <Route>
        {/* {props.isAuth ? <Redirect to='/bookmarks' /> : <MainRoutes />} */}
        <MainRoutes />
      </Route>
    </Switch>
  );
}

const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(Routes);
