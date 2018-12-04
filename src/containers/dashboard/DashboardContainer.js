import React, { Component } from 'react';
//Components
//Redux
import { connect } from 'react-redux';
//Helpers
import { initialTicketLoad } from '../../helpers/apiCalls';

class DashboardContainer extends Component {
    render() {
        return <h1>Dashboard</h1>
    }
}

const mapStateToProps = (state) => {
    return {
      token: state.token,
      tickets: state.tickets,
    };
  };
  
DashboardContainer = connect(mapStateToProps)(DashboardContainer);
export default DashboardContainer;
  