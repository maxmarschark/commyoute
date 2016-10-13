import React, { Component } from 'react';
import request from 'superagent';
import TrainIcon from './TrainIcon.jsx';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      trains: [],
    };
  }
  componentDidMount() {
    request.get('/api/trains').end((err, res) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          trains: res.body,
        });
      }
    });
  }
  render() {
    return (
      <div id="homeBody">
        <h1 className="home">Welcome to CommYOUte!</h1>
        <p className="home">Commute smarter, together.</p>
        {
          this.state.trains.map((train) => {
            return (
              <TrainIcon
              img_url={train.img_url}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Home;
