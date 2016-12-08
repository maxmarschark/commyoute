import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import request from 'superagent';
import Nav from '../components/nav.jsx';
import Home from '../components/home.jsx';
import Login from '../components/Login.jsx';
import Register from '../components/register.jsx';
import MyCommutes from '../components/MyCommutes.jsx';
import TrainReview from '../components/trainReview.jsx';

// function requireAuth(nextState, replace) {
//   request.get('/mycommutes')
//          .catch((response) => {
//            if (response.toString().includes('Forbidden')) {
//              console.log('response :' + response.toString());
//              replace({
//                pathname: '/login',
//                state: { nextPathname: nextState.location.pathname },
//              });
//            }
//          });
// }

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Nav}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="mycommutes" component={MyCommutes} />
        <Route path="TrainReview" component={TrainReview} />
      </Route>
    </Router>
  );
};

export default Routes;
