import React, { Component } from 'react';
import request from 'superagent';
import cookie from 'react-cookie';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    const input = e.target;
    const inputName = input.getAttribute('name');
    const updated = {};
    updated[inputName] = input.value;
    this.setState(updated);
  }

  handleSubmit(e) {
    e.preventDefault();
    request.get('/api/login')
           .send(this.state)
           .then((user) => {
             this.updateAuth();
             console.log(user.id);
           });
  }
  updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
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
