import React, { Component } from 'react';
//Components
import Test00 from './containers/_tests/Test00.js';
import Test01 from './containers/_tests/Test01.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Test01 />
        <Test00 />
      </div>
    );
  }
}

export default App;
