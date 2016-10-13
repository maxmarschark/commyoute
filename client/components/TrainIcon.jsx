import React, { Component } from 'react';

class TrainIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img
          src={this.props.img_url}
          className="train"
          height="50"
          width="50"
        />
      </div>
    );
  }
}

export default TrainIcon;
