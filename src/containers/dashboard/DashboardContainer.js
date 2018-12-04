import React, { Component } from 'react';
//Components
//Redux
import { connect } from 'react-redux';
//Helpers
import { initialTicketLoad } from '../../helpers/apiCalls';

class DashboardContainer extends Component {

    render() {
        return <button onClick={() => { 
            initialTicketLoad(this.props.token) 
                .then((res) => console.log(res))
            }} >Load tickets</button>
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
  