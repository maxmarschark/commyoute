import React, { Component } from 'react';
import request from 'superagent';
import cookie from 'react-cookie';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  handleInputChange(e) {
    const input = e.target;
    const inputName = input.getAttribute('name');
    const updated = {};
    updated[inputName] = input.value;
    this.setState(updated);
  }
  submitRegister(userInfo) {
    request.post('/api/signup')
           .send(this.state)
           .then(() => {
             this.updateAuth();
           });
  }
  updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }
  render() {
    return (
      <div id="registerBody">
        <h1>Register page</h1>
        <div>
          <input name="name" onChange={this.handleChange} type="text" placeholder="name" />
        </div>
        <div>
          <input name="username" onChange={this.handleChange} type="text" placeholder="username" />
        </div>
        <div>
          <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
        </div>
        <button className="btn" onClick={this.handleSubmit}>Register</button>
      </div>
    );
  }
}

export default Register;
