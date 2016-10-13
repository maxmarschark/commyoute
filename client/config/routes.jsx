import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Nav from '../components/Nav.jsx';
import Home from '../components/Home.jsx';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';
import MyCommutes from '../components/MyCommutes.jsx';

function requireAuth(nextState, replace) {
  if (!document.cookie) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Nav}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="mycommutes" component={MyCommutes} onEnter={requireAuth} />
      </Route>
    </Router>
  );
};

export default Routes;
