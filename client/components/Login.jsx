import React, { Component } from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import { withRouter } from 'react-router';

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
    request.post('/api/login')
           .send(this.state)
           .then((user) => {
             this.updateAuth();
             let cleanUser = JSON.parse(user.text);
             console.log(cleanUser.id);
             this.props.router.push('/mycommutes');
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
            <input name="email" onChange={this.handleChange} type="text" placeholder="username" />
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
          </div>
          <button className="btn" onClick={this.handleSubmit}>Login</button>
      </div>
    );
  }
}

export default withRouter(Login);
