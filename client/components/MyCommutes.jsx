import React, { Component } from 'react';

class MyCommute extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="ElCommute">
        <h1 className="MyCommute">My Commutes</h1>
        <div>
          <img className="MyTrain" src="ltrain.svg" height="200" width="200"></img>
            <p className="grades">Overall</p>
            <p className="grades">Delay</p>
            <p className="grades">Crowded</p>
            <p className="grades">Smelly</p>
        </div>
      </div>
    );
  }
}

export default MyCommute;
