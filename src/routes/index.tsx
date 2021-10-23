import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Login from 'views/login';
import NotFound from 'views/not-found';
// import PrivateRoute from 'views/private';
import Home from 'views/home';
import Company from 'views/company';
import Register from 'views/register';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="/:company" component={Company} />
    {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
