import React, { Component } from 'react';
//Components
//Redux
import { connect } from 'react-redux';
//Helpers
import { initialTicketLoad } from '../../helpers/apiCalls';

class DashboardContainer extends Component {

    render() {
        return <button onClick={() => { 
            initialTicketLoad(this.props.cookies.get('session')) 
                .then((res) => console.log(res))
            }} >Load tickets</button>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      tickets: state.tickets,
      cookies: ownProps.cookies
    };
  };
  
DashboardContainer = connect(mapStateToProps)(DashboardContainer);
export default DashboardContainer;
  