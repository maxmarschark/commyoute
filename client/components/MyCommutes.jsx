import React, { Component } from 'react';
import { withRouter } from 'react-router';
import request from 'superagent';

class MyCommute extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    request.get('/mycommutes')
           .catch((response) => {
             if (response.toString().includes('Forbidden')) {
               this.props.router.push('/login');
             }
           });
  }
  render() {
    return (
      <div id="MyCommute">
        <h1>My Commutes</h1>
      </div>
    );
  }
}

export default withRouter(MyCommute);
