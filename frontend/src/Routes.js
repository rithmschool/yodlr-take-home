import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import UsersTable from './UsersTable';
import Signup from './Signup';

const Routes = () => (
  <Switch>
    <Route exact path="/admin">
      <UsersTable />
    </Route>
    <Route exact path="/signup">
      <Signup />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    <Redirect to="/" />
  </Switch>
)


export default Routes;