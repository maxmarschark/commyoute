import React, { Component } from 'react';
import { withRouter } from 'react-router';
import request from 'superagent';

class TrainReview extends Component {
  constructor() {
    super();
    this.state = {
      type: 'Train',
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

  handleSubmit(e) {
    e.preventDefault();
    request.post('/api/reviews')
            .send(this.state)
            .then(() => {
              this.props.router.push('/mycommutes');
           });
  }

  render() {
    return (
      <div>
        <input name="Train" className="Input" type="text" onChange={this.handleChange}
        placeholder="Tell me....What train was yo ass ridin??" />
        <input name="Delay" className="Input" type="text" onChange={this.handleChange} placeholder="How delayed was yo ride? scale of 1-5" />
        <input name="Crowded" className="Input" type="text" onChange={this.handleChange} placeholder="How crowded was yo ride? scale of 1-5" />
        <input name="Smelly" className="Input" type="text" onChange={this.handleChange} placeholder="How stanky was yo ride? scale of 1-5" />
        <button className="SubmitReviewBtn" onClick={this.handleSubmit}>Submit Review</button>
      </div>
    );
  }
}

export default withRouter(TrainReview);
