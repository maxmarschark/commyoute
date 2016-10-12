import React, { Component } from 'react';
import request from 'superagent';

class Home extends Component {
  getInfo() {
    request.get('/api/7')
  }
  render() {
    return (
      <div id="homeBody">
        <h1>CommYOUte</h1>
        <button onClick={this.getInfo}>Get 7 Train Info</button>
      </div>
    );
  }
}

export default Home;
