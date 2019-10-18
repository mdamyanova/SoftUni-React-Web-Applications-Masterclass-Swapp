import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginForm';

const Routes = () => (
  <Switch>
    <Route path='/login' component={LoginPage} />

    <Route component={HomePage} />
  </Switch>
);

export default Routes;
