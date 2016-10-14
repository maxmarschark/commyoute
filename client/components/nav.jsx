import React, { Component } from 'react';
import { Link } from 'react-router';
import AuthController from '../../api/controllers/AuthController';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Nav extends Component {
  constructor() {
    super();
    this.showResponsive = this.showResponsive.bind(this);
  }
  showResponsive() {
    const nav = document.getElementById('topnav');
    if (nav.className === 'nav') {
      nav.className += 'responsive';
    } else {
      nav.className = 'nav';
    }
  }
  render() {
    let userDisplayElement;
    if (this.state.token) {
      userDisplayElement = (
        <ul id="nav">
          <li><Link className="link" to="/" id="homeButton">Home</Link></li>
          <li><Link className="link" to="/mycommutes" id="MyCommutesButton">My CommYOUte</Link></li>
          <li><Link className="link" to="/home" onClick={AuthController.signOut}>Signout</Link></li>
        </ul>
      );
    } else {
      userDisplayElement = (
        <ul id="nav">
          <li><Link className="link" to="/" id="homeButton">Home</Link></li>
          <li><Link className="link" to="/login" id="loginButton">Login</Link></li>
          <li><Link className="link" to="/register" id="registerButton">Register</Link></li>
        </ul>
      );
    }
    return (
      <div>
        {userDisplayElement}
      </div>
    );
  }
}

export default Nav;

Nav.propTypes = propTypes;
