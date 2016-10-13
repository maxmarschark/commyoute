import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="registerBody">
        <h1 className="RegisterPage">Register page</h1>
        <div>
          <input className="input" name="username" onChange={this.handleChange} type="text" placeholder="username" />
        </div>
        <div>
          <input className="input" name="password" onChange={this.handleChange} type="password" placeholder="password" />
        </div>
        <button className="btn" onClick={this.handleSubmit}>Register</button>
      </div>
    );
  }
}

export default Register;
