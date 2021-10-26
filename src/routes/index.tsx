import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Login from 'views/login';
import NotFound from 'views/not-found';
import PrivateRoute from 'views/private';
import Home from 'views/home';
import Company from 'views/company';
import Register from 'views/register';
import Dashboard from 'views/dashboard';
import Articles from 'views/articles';
import Categories from 'views/categories';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <PrivateRoute exact path="/articles" component={Articles} />
    <PrivateRoute exact path="/categories" component={Categories} />
    <Route path="/:company" component={Company} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
