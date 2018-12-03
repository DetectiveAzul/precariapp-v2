import React, { Component } from 'react';
import { Router } from '@reach/router'
//Components
import NavContainer from './containers/nav/NavContainer';

class App extends Component {
    render() {
        return(
            <div className="App">
                <NavContainer cookies={this.props.cookies} />
                {/* <Router>   
                </Router> */}
            </div>
        );
    }
}

export default App;