import React from "react";
import { Route, Switch } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import Feed from "../views/Feed";
import Profile from "../views/Profile";
=======
import { AuthCreate } from "../store/auth/actions";
import CreateUsers from "../views/CreateUser";
import Feed from "../views/Feed";
>>>>>>> b7fc8f0... add auth data
=======
import { AuthCreate } from "../store/auth/actions";
import CreateUsers from "../views/CreateUser";
import Feed from "../views/Feed";
>>>>>>> fix

export default function Routes() {
  const submit = (value) => {
    console.log(value.email);
    AuthCreate(value.email, value.password);
  };
  return (
    <Switch>
<<<<<<< HEAD
<<<<<<< HEAD
      <Route exact path='/home' component={Feed} />
      {/* <Route path='/search' component={Feed} />
      <Route path='/notifications' component={Feed} />
      <Route path='/messages' component={Feed} />
      <Route path='/bookmarks' component={Feed} />
      <Route path='/lists' component={Feed} /> */}
      <Route path='/profile' component={Profile} />
=======
=======
>>>>>>> fix
      <Route path='/home' component={Feed} />
      <Route path='/search' component={Feed} />
      <Route path='/notifications' component={Feed} />
      <Route path='/messages' component={Feed} />
      <Route path='/bookmarks'>
        <CreateUsers onSubmit={submit} />
      </Route>
      <Route path='/lists' component={Feed} />
      <Route path='/profile' component={Feed} />
<<<<<<< HEAD
>>>>>>> b7fc8f0... add auth data
=======
>>>>>>> fix
    </Switch>
  );
}
