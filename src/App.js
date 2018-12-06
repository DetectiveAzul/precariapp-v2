import React, { Component } from 'react';
import { Router } from '@reach/router'
import styled from 'styled-components';
//Components
import NavContainer from './containers/nav/NavContainer';
import DashboardContainer from './containers/dashboard/DashboardContainer';
import background from './img/login-background.jpg';

const GlobalCSSContainer = styled.div`
    height: 100vh;
    font-family: Roboto;
    box-sizing: border-box;
    background-image: url(${background});
    background-position: center;
`

class App extends Component {
    render() {
        return(
            <GlobalCSSContainer className="App">
                <NavContainer cookies={this.props.cookies} />
                <Router>   
                    <DashboardContainer path="/"/>
                </Router>
            </GlobalCSSContainer>
        );
    }
}

export default App;
