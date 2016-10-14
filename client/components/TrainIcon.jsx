import React, { Component } from 'react';
import request from 'superagent';

class TrainIcon extends Component {
  constructor(props) {
    super(props);
    this.img = this.props.url;
    this.name = this.props.trainName;
    this.state = {
      Overall: 0
    }
  }

  componentDidMount() {
    request.get(`/api/trains/${this.name}`)
            .then((data) => {
              this.setState({
                Overall: data.Overall
              })
            })

  }
  render() {
    return (
      <div className="trainIcon" id={this.name} >
        <img
          src={this.img}
          className="train"
          height="50"
          width="50"
        />
        <div>{this.state.Overall ? this.state.Overall : null}</div>
      </div>
    );
  }
}

export default TrainIcon;
