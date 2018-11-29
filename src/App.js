import React, { Component } from 'react';
//Components
import LoginContainer from './containers/login/LoginContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginContainer />
      </div>
    );
  }
}

export default App;
