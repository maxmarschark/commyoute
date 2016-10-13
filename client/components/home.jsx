import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
  }

  toggleClass(divID) {
      let ratings = [];
      let delay = document.getElementById(divID).childNodes[2];
      let crowded = document.getElementById(divID).childNodes[3];
      let smelly = document.getElementById(divID).childNodes[4];
      ratings.push(delay, crowded, smelly);
      for(let rating of ratings) {
        console.log(rating.className);
        rating.className == 'rating rating--closed' ? rating.className = 'rating rating--open' : rating.className = 'rating rating--closed';
      }
  }

  toggleOneClass() {
    let ratings = document.getElementsByClassName("one-rating");
    for(let rating of ratings) {
      console.log(rating.className);
      rating.className == 'one-rating one-rating--closed' ? rating.className = 'one-rating one-rating--open' : rating.className = 'one-rating one-rating--closed';
  }
}
  toggleTwoClass() {
    let ratings = document.getElementsByClassName("two-rating");
    for(let rating of ratings) {
      console.log(rating.className);
      rating.className == 'two-rating two-rating--closed' ? rating.className = 'two-rating two-rating--open' : rating.className = 'two-rating two-rating--closed';
    }
}

  render() {
    return (
      <div id="homeBody">
        <h1 className="home">Welcome to CommYOUte!</h1>
          <p className="home">Commute smarter, together.</p>

          <div id="one" onClick={this.toggleOneClass}>
            <img className="train" src="1train.svg" height="50" width="50"></img>
            <span className="ovr">overall</span>
            <p className="rating rating--closed">delay</p>
            <p className="rating rating--closed">crowded</p>
            <p className="rating rating--closed">smelly</p>
          </div>
          <div id="two">
            <img className="train" src="2train.svg" height="50" width="50"></img>
            <span className="ovr">overall</span>
            <p className="rating rating--closed">delay</p>
            <p className="rating rating--closed">crowded</p>
            <p className="rating rating--closed">smelly</p>
          </div>
          <div id="three">
            <img className="train" src="3train.svg" height="50" width="50"></img>
            <span className="ovr">overall</span>
            <p className="rating rating--closed">delay</p>
            <p className="rating rating--closed">crowded</p>
            <p className="rating rating--closed">smelly</p>
          </div>
          <div>
            <img className="train" src="4train.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="5train.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="6train.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="ltrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="gtrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="7train.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="atrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="ctrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="etrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="btrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="mtrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="dtrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="ftrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="ntrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="qtrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="rtrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="jtrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="ztrain.svg" height="50" width="50"></img>
          </div>
          <div>
            <img className="train" src="strain.svg" height="50" width="50"></img>
          </div>
      </div>
      );
    };
  }
export default Home;
