import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="navBar">
        <Link to="/" id="homeButton">Home</Link>
        <Link to="/register" id="registerButton">Register</Link>
      </div>
    );
  }
}
