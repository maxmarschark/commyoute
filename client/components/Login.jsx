import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="loginBody">
        <h1>Login page</h1>
          <div id="login-form">
            <input name="username" onChange={this.handleChange} type="text" placeholder="username" />
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
          </div>
          <button className="btn" onClick={this.handleSubmit}>Login</button>
      </div>
    );
  }
}

export default Login;
