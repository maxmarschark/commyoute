import React, { Component } from 'react';
import { withRouter } from 'react-router';
import request from 'superagent';

class TrainReview extends Component {
  constructor() {
    super();
    this.state = {
      Train: '',
      UserId: 0,
      Overall: 0,
      Crowded: 0,
      Delay: 0,
      Smelly: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(e) {
    const input = e.target;
    console.log(input)
    const inputName = input.getAttribute('name');
    console.log(inputName);
    const updated = {};
    updated[inputName] = input.value;
    this.setState(updated);
  }

  render() {
    return (
      <div>
        <input name="Train" type="text" onChange={this.handleChange}
        placeholder="What train were you on?" />
        <input name="Delay" type="text" onChange={this.handleChange} placeholder="rate delay 1-5" />
        <input name="Crowded" type="text" onChange={this.handleChange} placeholder="rate Crowded 1-5" />
        <input name="Smelly" type="text" onChange={this.handleChange} placeholder="rate smelly 1-5" />
      </div>
    );
  }
}

export default withRouter(TrainReview);
