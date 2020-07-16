import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';

const Routes = () => (
  <Switch>
    <Route exact path="/admin">
      <p>list of users</p>
    </Route>
    <Route exact path="/signup">
      <p>signup form</p>
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    <Redirect to="/" />
  </Switch>
)


export default Routes;