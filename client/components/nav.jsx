import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Nav extends Component {
  constructor() {
    super();
  }

  showResponsive() {
    let nav = document.getElementById("topnav");
    if (nav.className === "nav") {
        nav.className += " responsive";
    } else {
        nav.className = "nav";
    }
  }
  render() {
    return (
      <div>
        <ul class="nav" id="topnav">
          <li><Link class="link" to="/" id="homeButton">Home</Link></li>
          <li><Link class="link" to="/register" id="registerButton">Register</Link></li>
          <li class="icon">
            <a href="javascript:void(0);" style="font-size:15px;" onclick="showResponsive()">☰</a>
          </li>
        </ul>
        <div id="body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Nav;

Nav.propTypes = propTypes;
