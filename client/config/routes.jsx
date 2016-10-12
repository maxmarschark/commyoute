import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Nav from '../components/Nav.jsx';
import Home from '../components/Home.jsx';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Nav}>
        <IndexRoute component={Home} />
        <Route path="Login" component={Login} />
        <Route path="register" component={Register} />
      </Route>
    </Router>
  );
};

export default Routes;
