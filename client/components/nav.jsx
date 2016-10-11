import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Nav extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div id="navBar">
          <Link to="/" id="homeButton">Home</Link>
          <Link to="/register" id="registerButton">Register</Link>
        </div>
        <div id="body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Nav;

Nav.propTypes = propTypes;
