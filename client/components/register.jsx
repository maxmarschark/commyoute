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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
  }
  handleInputChange(e) {
    const input = e.target;
    const inputName = input.getAttribute('name');
    const updated = {};
    updated[inputName] = input.value;
    this.setState(updated);
    console.log(this.state);
  }
  submitRegister(e) {
    e.preventDefault();
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
          <input name="name" onChange={this.handleInputChange} type="text" placeholder="name" />
        </div>
        <div>
          <input name="email" onChange={this.handleInputChange} type="text" placeholder="username" />
        </div>
        <div>
          <input name="password" onChange={this.handleInputChange} type="password" placeholder="password" />
        </div>
        <button className="btn" onClick={this.submitRegister}>Register</button>
      </div>
    );
  }
}

export default Register;
