import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthCreate } from "../store/auth/actions";
import CreateUsers from "../views/CreateUser";
import Feed from "../views/Feed";

export default function Routes() {
  const submit = (value) => {
    console.log(value.email);
    AuthCreate(value.email, value.password);
  };
  return (
    <Switch>
      <Route path='/home' component={Feed} />
      <Route path='/search' component={Feed} />
      <Route path='/notifications' component={Feed} />
      <Route path='/messages' component={Feed} />
      <Route path='/bookmarks'>
        <CreateUsers onSubmit={submit} />
      </Route>
      <Route path='/lists' component={Feed} />
      <Route path='/profile' component={Feed} />
    </Switch>
  );
}
