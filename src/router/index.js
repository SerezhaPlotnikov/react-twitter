import React from 'react';
import { Route, Switch } from "react-router-dom";
import Feed from '../views/Feed';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Feed}/>
      <Route path="/search" component={Feed}/>
      <Route path="/notifications" component={Feed}/>
      <Route path="/messages" component={Feed}/>
      <Route path="/bookmarks" component={Feed}/>
      <Route path="/lists" component={Feed}/>
      <Route path="/profile" component={Feed}/>
    </Switch>
  )
}