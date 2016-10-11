import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from '../components/home.jsx';
import Nav from '../components/nav.jsx';
import Register from '../components/register.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Nav}>
        <IndexRoute component={Home} />
        <Route path="/register" component={Register} />
      </Route>
    </Router>
  );
};

export default Routes;
