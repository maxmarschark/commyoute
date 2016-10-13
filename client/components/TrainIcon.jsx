import React, { Component } from 'react';

class TrainIcon extends Component {
  constructor(props) {
    super(props);
    this.img = this.props.url;
    this.name = this.props.trainName;
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
      </div>
    );
  }
}

export default TrainIcon;
