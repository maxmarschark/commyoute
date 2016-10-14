import React, { Component } from 'react';

class TrainIcon extends Component {
  constructor(props) {
    super(props);
    this.img = this.props.url;
    this.name = this.props.trainName;
    this.state = {
      overall: 0,
    };
  }
  render() {
    return (
      <div className="trainIcon" id={this.name} >
        <img
          role="presentation"
          src={this.img}
          className="train"
          height="50"
          width="50"
        />
        <div className="overallRender">
          {this.state.overall}
        </div>
      </div>
    );
  }
}

export default TrainIcon;
