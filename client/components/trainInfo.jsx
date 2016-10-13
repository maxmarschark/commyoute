import React, { Component } from 'react';


class TrainInfo extends Component {
  constructor() {
    super();
    this.state {
      infoOpen: false
    }
  }

  handleClose() {
    this.setState( {
      infoOpen: false
    })
  }

  handleOpen() {
    this.setState( {
      infoOpen: true
    })
  }


  render() {
    if (this.state.infoOpen) {
      return (
        <div onClick={this.handleClose}>
          <p className="delay">delay</p>
          <p className="crowded">crowded</p>
          <p className="smelly">smelly</p>
          )
    }
    else {
      return (
        <div onClick={this.handleOpen}
        )
    }
  }
}

export default TrainInfo;
