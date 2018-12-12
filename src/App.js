import React, { Component } from 'react';
import { Router } from '@reach/router'
import styled from 'styled-components';
//Components
import NavContainer from './containers/nav/NavContainer';
import DashboardContainer from './containers/dashboard/DashboardContainer';
import TicketContainer from './containers/ticketView/TicketContainer';
import NoFound from './containers/NoFound';
import background from './img/login-background.jpg';
//Other
import './Router.css';
import NewTicketContainer from './containers/newTicket/NewTicketContainer';

const GlobalCSSContainer = styled.div`
    height: 100vh;
    padding: 10px;
    font-family: Roboto;
    box-sizing: border-box;
    background-image: url(${background});
    background-position: center;
    min-width: 600px;
    display: flex;
    flex-direction: column;
`

class App extends Component {
    render() {
        return(
            <GlobalCSSContainer className="App-global">
                <NavContainer cookies={this.props.cookies} />
                <Router className="router">   
                    <DashboardContainer path="/"/>
                    <NewTicketContainer path="/ticket/new" />
                    <TicketContainer path="/ticket/:reference"/>
                    <NoFound default />
                </Router>
            </GlobalCSSContainer>
        );
    }
}

export default App;
