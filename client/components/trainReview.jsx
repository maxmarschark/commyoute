import React, { Component } from 'react';
import { withRouter } from 'react-router';
import request from 'superagent';

class TrainReview extends Component {
  constructor() {
    super();
    this.state = {
      type: 'Train',
      Name: '',
      UserId: 1,
      Overall: 0,
      Crowded: 0,
      Delay: 0,
      Smelly: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const input = e.target;
    const inputName = input.getAttribute('name');
    console.log(inputName);
    const updated = {};
    updated[inputName] = input.value;
    this.setState(updated);
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
    request.post('/api/create')
            .send(this.state)
            .then(() => {
              this.props.router.push('/mycommutes');
           })
            .catch((err) => {
              console.log('this is the err ' + err);
            });
  }

  render() {
    return (
      <div>
        <input name="Name" className="Input" type="text" onChange={this.handleChange}
        placeholder="Tell me....What train was yo ass ridin??" />
        <input name="Delay" className="Input" type="text" onChange={this.handleChange} placeholder="How delayed was yo ride? scale of 1-5" />
        <input name="Crowded" className="Input" type="text" onChange={this.handleChange} placeholder="How crowded was yo ride? scale of 1-5" />
        <input name="Smelly" className="Input" type="text" onChange={this.handleChange} placeholder="How stanky was yo ride? scale of 1-5" />
        <input name="Overall" className="Input" type="text" onChange={this.handleChange} placeholder="What did you think overall? scale of 1-5" />
        <button className="SubmitReviewBtn" onClick={this.handleSubmit}>Submit Review</button>
      </div>
    );
  }
}

export default withRouter(TrainReview);
