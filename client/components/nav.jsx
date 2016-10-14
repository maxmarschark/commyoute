import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Nav extends Component {
  constructor() {
    super();
    this.showResponsive = this.showResponsive.bind(this);
  }

  showResponsive() {
    let nav = document.getElementById("topnav");
    if (nav.className === "nav") {
        nav.className += "responsive";
    } else {
        nav.className = "nav";
    }
  }
  render() {
    return (
      <div>
        <ul className="nav" id="topnav">
          <li><Link className="link" to="/" id="homeButton">Home</Link></li>
          <li><Link className="link" to="/login" id="loginButton">Login</Link></li>
          <li><Link className="link" to="/register" id="registerButton">Register</Link></li>
          <li><Link className="link" to="/mycommutes" id="MyCommutesButton">My CommYOUte</Link></li>
          <li className="icon">
            <a href="javascript:void(0);" className="font" onClick={this.showResponsive}>☰</a>
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
