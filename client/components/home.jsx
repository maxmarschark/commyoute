import React, { Component } from 'react';
import request from 'superagent';
import TrainIcon from './TrainIcon.jsx';

class Home extends Component {
  constructor() {
    super();
    this.trains = ['z', 'r', 'q', 'n', 'm', 'l', 'j', '7', 'a', 'b', 'c', 'd', 'e', 'f', 'g', '6', '5', '4', '3', '2', '1'];
    this.trainURLs = ['http://i.imgur.com/R79RkJc.jpg', 'http://i.imgur.com/fmwcuVp.jpg', 'http://i.imgur.com/YM6OziH.jpg', 'http://i.imgur.com/68hkBIk.jpg', 'http://i.imgur.com/4LP1BJT.jpg', 'http://i.imgur.com/2eQaQ66.jpg', 'http://i.imgur.com/KVlrMnA.jpg', 'http://i.imgur.com/oTdxcdP.jpg', 'http://i.imgur.com/fEtZJtp.jpg', 'http://i.imgur.com/Z7U8ShG.jpg', 'http://i.imgur.com/IYcNLir.jpg', 'http://i.imgur.com/GtwIUKX.jpg', 'http://i.imgur.com/N10qEWJ.jpg', 'http://i.imgur.com/6MfZLyL.jpg', 'http://i.imgur.com/pwjqFlQ.jpg', 'http://i.imgur.com/gGhZAmQ.jpg', 'http://i.imgur.com/7jvbP2J.jpg', 'http://i.imgur.com/D7xf6Uz.jpg', 'http://i.imgur.com/KPIV5zf.jpg', 'http://i.imgur.com/N0sLEvs.jpg', 'http://i.imgur.com/k8TCiXf.jpg'];
  }
  buildLinks() {
    return this.trains.map((train, idx) => {
      return <TrainIcon trainName={train} url={this.trainURLs[idx]} />
    });
  }
  render() {
    return (
      <div id="homeBody">
        <h1 className="home">Welcome to CommYOUte!</h1>
<<<<<<< HEAD
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
=======
        <p className="home">Commute smarter, together</p>
        <ul id="trainHouse">
          {this.buildLinks()}
        </ul>
>>>>>>> c7a9300ce5097eec06b3a0d887ed35ea0008c088
      </div>
    );
  }
}

export default Home;
