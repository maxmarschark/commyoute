import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Nav extends Component {
  constructor() {
    super();
  }

  toggleClass() {
    let nav = document.querySelectorAll('.nav-item');
    let hamburger = document.querySelector('.hamburger');
    for (let navItem of nav) {
      navItem.className === 'nav-item nav-item--closed' ? navItem.setAttribute('class', 'nav-item nav-item--open') : navItem.setAttribute('class', 'nav-item nav-item--closed');
    }
    hamburger.innerText == '☰' ? hamburger.innerText='x' : hamburger.innerText='☰';
  }

  render() {
    return (
      <div>
        <div className="top-nav" id="topnav">
          <p className="hamburger" onClick={this.toggleClass}>☰</p>
          <p><Link className="nav-item nav-item--closed" to="/" id="homeButton">Home</Link></p>
          <p><Link className="nav-item nav-item--closed" to="/register" id="registerButton">Register</Link></p>
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
