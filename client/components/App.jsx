import React, { Component } from 'react';

const propTypes = {
  message: React.PropTypes.string,
};

class App extends Component {
  render() {
    return (
      <div className="test">
        <p>Render something please</p>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
